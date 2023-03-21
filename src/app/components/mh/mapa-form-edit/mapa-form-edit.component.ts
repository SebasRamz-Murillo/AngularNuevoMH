import { Component } from '@angular/core';
import { ActivatedRoute, Route, ParamMap } from '@angular/router';
import { Mapa } from 'src/app/models/mapa.model';
import { MapaService } from 'src/app/services/mapa.service';
import { OnInit, OnDestroy } from '@angular/core';
import { Injectable } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { Location } from '@angular/common';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-mapa-form-edit',
  templateUrl: './mapa-form-edit.component.html',
  styleUrls: ['./mapa-form-edit.component.css']
})
export class MapaFormEditComponent implements OnInit {
  form: FormGroup;
  mapa?: Mapa;
  eventSource: EventSource = new EventSource(environment.URL_API+'/mapas/stream' );

  suscription?: Subscription;
  id: number = 0;
  constructor(private route: ActivatedRoute,
    private mapaService: MapaService,
    location: Location,
    private fb: FormBuilder) {
    this.form = this.fb.group({
      id: ['', Validators.required],
      nombre: ['', Validators.required],
      descripcion: ['', Validators.required],
      totalZonas: ['', Validators.required],
    })
  }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.getOneMapa(this.id);
    this.suscription = this.mapaService.get_refresh$().subscribe(() => {
      this.getOneMapa(this.id);
    }
    );
    console.log("ngOnInit");
  }
  ngOnDestroy(): void {
    this.suscription?.unsubscribe();
    console.log('Se destruyó el componente');
  }

  getOneMapa(id: number) {
    this.mapaService.getOneMapa(id).subscribe((data: Mapa) => {
      this.mapa = data;
      this.form.patchValue({
        id: this.mapa.id,
        nombre: this.mapa.nombre,
        descripcion: this.mapa.descripcion,
        totalZonas: this.mapa.total_zonas,
      });
    });
  }
  OnSubmit(values: Mapa) {
    this.eventSource.dispatchEvent(new Event('newMapa'));

    this.mapaService.updateMapa(values).subscribe();
    this.form.reset();
  }
  goBack() {

  }
}

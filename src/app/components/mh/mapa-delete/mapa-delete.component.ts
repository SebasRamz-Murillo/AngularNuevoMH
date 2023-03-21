import { Component } from '@angular/core';
import { ActivatedRoute, Route, ParamMap } from '@angular/router';
import { OnInit, OnDestroy } from '@angular/core';
import { Mapa } from 'src/app/models/mapa.model';
import { MapaService } from 'src/app/services/mapa.service';
import { Subscription } from 'rxjs';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Location } from '@angular/common';

@Component({
  selector: 'app-mapa-delete',
  templateUrl: './mapa-delete.component.html',
  styleUrls: ['./mapa-delete.component.css']
})
export class MapaDeleteComponent {
  form: FormGroup;
  mapa?: Mapa;
  id: number = 0;
  nombre: string = '';
  suscription?: Subscription;

  constructor(private route: ActivatedRoute, private mapaService: MapaService, private fb: FormBuilder, private location: Location) {
    this.form = this.fb.group({
      id: [this.id, Validators.required],
    });
  }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.getOneMapa(this.id);
    this.suscription = this.mapaService.get_refresh$().subscribe(() => {
      this.getOneMapa(this.id);
    });
  }

  getOneMapa(id: number) {
    this.mapaService.getOneMapa(id).subscribe((data: Mapa) => {
      this.mapa = data;
      this.form.patchValue({
        id: this.mapa.id,
      });
    });
  }
  OnSubmit(values: Mapa) {
    this.mapaService.deleteMapa(values).subscribe();
    this.form.reset();
    this.location.back();
  }
}

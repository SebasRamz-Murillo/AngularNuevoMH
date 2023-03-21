import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Receta } from 'src/app/models/receta.model';
import { RecetaService } from 'src/app/services/receta.service';
import { OnInit, OnDestroy } from '@angular/core';
import { Location } from '@angular/common';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-receta-form',
  templateUrl: './receta-form.component.html',
  styleUrls: ['./receta-form.component.css']
})
export class RecetaFormComponent implements OnInit, OnDestroy {
  chef: Receta[]= [];
  suscription?: Subscription;
  form: FormGroup;
  receta?: Receta;

  constructor(
    private fb: FormBuilder,
    private recetaService: RecetaService,
    private location: Location) {
    this.form = this.fb.group({
      nombre: ['', Validators.required],
      duracion: ['', Validators.required],
      preparacion: ['', Validators.required],
      chef: ['', Validators.required],
    });
  }
  OnSubmit(values: Receta) {
    this.recetaService.addReceta(values).subscribe();
    this.form.reset();
  }
  goBack() {
    this.location.back();
  }
  ngOnInit(): void {
    this.getChefs();
    this.suscription = this.recetaService.get_refresh$().subscribe(() => {
      this.getChefs();
    });
  }
  ngOnDestroy(): void {
    this.suscription?.unsubscribe();
    console.log('Se destruyó el componente');
  }
  //Metodos
  getChefs() {
    this.recetaService.getChefs().subscribe(data => this.chef = data);
  }

}

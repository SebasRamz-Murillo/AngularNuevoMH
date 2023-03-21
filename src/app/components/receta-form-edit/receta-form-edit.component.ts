import { Component } from '@angular/core';
import { OnInit, OnDestroy } from '@angular/core';
import { Injectable } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { ActivatedRoute, Route, ParamMap } from '@angular/router';
import { Location } from '@angular/common';
import { Receta } from 'src/app/models/receta.model';
import { RecetaService } from 'src/app/services/receta.service';

@Component({
  selector: 'app-receta-form-edit',
  templateUrl: './receta-form-edit.component.html',
  styleUrls: ['./receta-form-edit.component.css']
})
export class RecetaFormEditComponent implements OnInit, OnDestroy {
  form: FormGroup;
  chef: Receta[] = [];
  suscription?: Subscription;
  id: number = 0;
  receta?: Receta;

  constructor(private route: ActivatedRoute,
    private recetaService: RecetaService,
    private location: Location,
    private fb: FormBuilder) {
    this.form = this.fb.group({
      id: ['', Validators.required],
      nombre: ['', Validators.required],
      duracion: ['', Validators.required],
      preparacion: ['', Validators.required],
      chef: ['', Validators.required]
    })
  }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.getOneReceta(this.id);
    this.suscription = this.recetaService.get_refresh$().subscribe(() => {
      this.getOneReceta(this.id);
    }
    );
    this.getChefs();
    this.suscription = this.recetaService.get_refresh$().subscribe(() => {
      this.getChefs();
    });
  }
  ngOnDestroy(): void {
    this.suscription?.unsubscribe();
  }

  getOneReceta(id: number) {
    this.recetaService.getOneReceta(id).subscribe((data: Receta) => {
      this.receta = data;
      this.form.patchValue({
        id: this.receta?.id,
        nombre: this.receta?.nombre,
        duracion: this.receta?.duracion,
        preparacion: this.receta?.preparacion,
        chef: this.receta?.chef
      });
    });
  }
  OnSubmit(values: Receta) {
    this.recetaService.updateReceta(values).subscribe();
    this.form.reset();
    this.location.back();
  }

  getChefs() {
    this.recetaService.getChefs().subscribe(data => this.chef = data);
  }
  goBack() {
    this.location.back();
  }
}

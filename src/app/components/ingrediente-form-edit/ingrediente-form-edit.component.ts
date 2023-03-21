import { Component } from '@angular/core';
import { OnInit, OnDestroy } from '@angular/core';
import { Injectable } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { ActivatedRoute, Route, ParamMap } from '@angular/router';
import { Ingrediente } from 'src/app/models/ingrediente.model';
import { IngredienteService } from 'src/app/services/ingrediente.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-ingrediente-form-edit',
  templateUrl: './ingrediente-form-edit.component.html',
  styleUrls: ['./ingrediente-form-edit.component.css']
})

export class IngredienteFormEditComponent {
  form: FormGroup;
  suscription?: Subscription;
  id: number = this.route.snapshot.params['id'];
  ingrediente?: Ingrediente;

  constructor(private route: ActivatedRoute,
    private ingredienteService: IngredienteService,
    private location: Location,
    private fb: FormBuilder) {
    this.form = this.fb.group({
      id: ['', Validators.required],
      nombre: ['', Validators.required],
      tipo: ['', Validators.required],
      cantidad: ['', Validators.required]
    })
  }

  ngOnInit(): void {
    this.getOneIngrediente(this.id);
    this.suscription = this.ingredienteService.get_refresh$().subscribe(() => {
      this.getOneIngrediente(this.id);
    });
  }

  getOneIngrediente(id: number) {
    this.ingredienteService.getOneIngrediente(id).subscribe((data: Ingrediente) => {
      this.ingrediente = data;
      this.form.patchValue({
        id: this.ingrediente?.id,
        nombre: this.ingrediente?.nombre,
        tipo: this.ingrediente?.tipo,
        cantidad: this.ingrediente?.cantidad
      })
    });
  }
  OnSubmit(values: Ingrediente) {
    this.ingredienteService.updateIngrediente(values).subscribe();
    this.form.reset();
    this.location.back();
  }
}

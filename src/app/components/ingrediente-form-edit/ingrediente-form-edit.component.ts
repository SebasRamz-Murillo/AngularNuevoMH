import { Component } from '@angular/core';
import { OnInit, OnDestroy } from '@angular/core';
import { Injectable } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { ActivatedRoute, Route, ParamMap } from '@angular/router';
import { Ingrediente } from 'src/app/Models/ingrediente.model';
import { IngredienteService } from 'src/app/services/ingrediente.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ingrediente-form-edit',
  templateUrl: './ingrediente-form-edit.component.html',
  styleUrls: ['./ingrediente-form-edit.component.css']
})

export class IngredienteFormEditComponent implements OnInit {
  formulario: FormGroup;
  ingrediente?: Ingrediente;
  suscription?: Subscription;
  id: number = 0;

  constructor(private route: ActivatedRoute,
    private ingredienteService: IngredienteService,
    private router: Router,
    private fb: FormBuilder) {
    this.formulario = this.fb.group({
      id: ['', Validators.required],
      nombre: ['', Validators.required],
      tipo: ['', Validators.required],
      cantidad: ['', Validators.required]
    })
  }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.getOneIngrediente(this.id);
    this.suscription = this.ingredienteService.get_refresh$().subscribe(() => {
      this.getOneIngrediente(this.id);
    });
    console.log("El id es: "+this.id);
  }


  getOneIngrediente(id: number) {
    this.ingredienteService.getOneIngrediente(id).subscribe((data: Ingrediente) => {
      this.ingrediente = data;
      console.log("El ingrediente es: "+this.ingrediente);
      this.formulario.patchValue({
        id: this.ingrediente?.id,
        nombre: this.ingrediente?.nombre,
        tipo: this.ingrediente?.tipo,
        cantidad: this.ingrediente?.cantidad
      })
    });
  }
  OnSubmit(values: Ingrediente) {
    this.ingredienteService.updateIngrediente(values).subscribe();
    this.formulario.reset();
    this.router.navigate(['/ingredientes']);
  }
}

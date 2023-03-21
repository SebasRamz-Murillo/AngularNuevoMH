import { Component } from '@angular/core';
import { Injectable } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UsuarioService } from 'src/app/services/usuario.service';
import { Usuario } from 'src/app/models/usuario.model';
import { Location } from '@angular/common';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
@Injectable()
export class RegistroComponent {
  form: FormGroup;
  usuario?: Usuario;

  constructor(
    private fb: FormBuilder,
    private location: Location,
    private usuarioService: UsuarioService
  ){
    this.form = this.fb.group({
      name: ['', Validators.required],
      ap_paterno: ['', Validators.required],
      ap_materno: ['', Validators.required],
      telefono: ['', Validators.required],
      email : ['', Validators.required],
      password : ['', Validators.required],
    })
  }
  OnSubmit(values: Usuario) {

  }
}

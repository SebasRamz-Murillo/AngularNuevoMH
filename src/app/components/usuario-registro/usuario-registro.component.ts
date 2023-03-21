import { Component } from '@angular/core';
import { Injectable } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UsuarioService } from 'src/app/services/usuario.service';
import { Usuario } from 'src/app/models/usuario.model';
import { LoginService } from 'src/app/services/login.service';
import { Location } from '@angular/common';
import { RouterLink } from '@angular/router';
import { Router } from '@angular/router';
import { catchError } from 'rxjs';
import { of } from 'rxjs';


@Component({
  selector: 'app-usuario-registro',
  templateUrl: './usuario-registro.component.html',
  styleUrls: ['./usuario-registro.component.css']
})
@Injectable()
export class UsuarioRegistroComponent {
  form: FormGroup;
  usuario?: Usuario;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private location: Location,
    private loginService: LoginService,
  ) {
    this.form = this.fb.group({
      name: ['', Validators.required],
      ap_paterno: ['', Validators.required],
      ap_materno: ['', Validators.required],
      telefono: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', Validators.required],
    })
  }
  OnSubmit(values: Usuario) {
    this.loginService.registrarUsuario(values).subscribe(
    );
    this.form.reset();
    this.router.navigate(['/correo'])
  }
}



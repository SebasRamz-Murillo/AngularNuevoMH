import { Component, OnInit } from '@angular/core';
import { Injectable } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Location } from '@angular/common';
import { Router } from '@angular/router';
import { Usuario } from 'src/app/models/usuario.model';
import { LoginService } from 'src/app/services/login.service';
import { catchError, min } from 'rxjs/operators';
import { of } from 'rxjs';
import { environment } from 'src/environments/environment.development';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  usuario?: Usuario;
  form: FormGroup;
  usuarioInactivo = environment.usuarioInactivo;
  contadorSession = environment.contadorSession;

  constructor(
    private fb: FormBuilder,
    private loginService: LoginService,
    private router: Router,
  ) {
    this.form = this.fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required],
    });
  }
  ngOnInit(): void {
    const contraseñaInvalda = localStorage.getItem('contraseñaInvalda');
  }
  OnSubmit(values: Usuario) {
    if (this.form.valid) {
      this.loginService.login(values).pipe().subscribe((response: any) => {
        if (response) {
          console.log('Inicio de sesión exitoso');
          environment.usuarioInactivo = false;

          localStorage.setItem('token', response.token);
          this.router.navigate(['/chef']);
        }
      }, (error) => {
        console.log(error);
        if (error.status == 403) {

        } else {
          console.log(error.status);
          console.log('Error al iniciar sesión');
          this.router.navigate(['/passwordInvalid']);
          environment.contadorSession++;
          if (this.contadorSession == 2) {
            environment.usuarioInactivo = true;

          }
        }
      });
      this.form.reset();
      localStorage.setItem('password', values.password);
    }

  }
  reenviarCorreo() {
    this.router.navigate(['/recuperarCuenta']);
  }
  activarCuenta() {
    this.router.navigate(['/activarCuenta']);
  }
}

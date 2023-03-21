import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';
import { Usuario } from 'src/app/models/usuario.model';
import { OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-cambiar-password',
  templateUrl: './cambiar-password.component.html',
  styleUrls: ['./cambiar-password.component.css']
})
export class CambiarPasswordComponent {
  form: FormGroup;
  passwordsMatch = false;
  correoInvalido = false;

  constructor(private router: Router, private loginService: LoginService, private fb: FormBuilder) {
    this.form = this.fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required],
      password2: ['', Validators.required]
    });

    // Suscribirse a los cambios en el valor del FormGroup 'form'
    this.form.valueChanges.subscribe((value) => {
      this.passwordsMatch = value.password === value.password2;
    });
  }

  OnSubmit(values: Usuario) {
    if (this.form.valid && this.passwordsMatch) {
      this.loginService.cambiarContraseña(values).subscribe(response => {
        this.router.navigate(['']);
      }, (error) => {
        this.correoInvalido = true;
        console.log(error);
      });
    }
  }
}



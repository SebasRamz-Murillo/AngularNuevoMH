import { Component } from '@angular/core';
import { Injectable } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Location } from '@angular/common';
import { Router } from '@angular/router';
import { Usuario } from 'src/app/models/usuario.model';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-login-alterno',
  templateUrl: './login-alterno.component.html',
  styleUrls: ['./login-alterno.component.css']
})
export class LoginAlternoComponent {
  usuario?: Usuario;
  form: FormGroup;
  constructor(
    private fb: FormBuilder,
    private loginService: LoginService,
    private router: Router) {
    this.form = this.fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required],
    });
  }
  OnSubmit(values: Usuario) {
    this.loginService.login(values).subscribe((response: Usuario) => {
      localStorage.setItem('token', response.token);
      this.router.navigate(['/chef']);
    });
    this.form.reset();
  }

}

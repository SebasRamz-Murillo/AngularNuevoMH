import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { LoginService } from 'src/app/services/login.service';
import { HttpInterceptor } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Usuario } from 'src/app/models/usuario.model';
import { environment } from 'src/environments/environment';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  form: FormGroup;
  usuario?: Usuario;

  suscription?: Subscription;
  myToken = localStorage.getItem('token') || '';
  constructor(
    private loginService: LoginService,
    private http: HttpClient,
    private router: Router,
    private fb: FormBuilder
  ) {
    this.form = this.fb.group({
      token: ['', Validators.required]
    });
  }
  ngOnInit(): void {
    this.myToken
    const token = this.myToken;
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    this.http.get<Usuario>(environment.URL_API + '/usuario/infoObjeto', { headers }).subscribe(data => this.usuario = data);

  }


  OnSubmit(values: Usuario) {
    this.loginService.logout(values).subscribe();
    localStorage.removeItem('token');
    this.form.reset();
    this.router.navigate(['']);
  }


}

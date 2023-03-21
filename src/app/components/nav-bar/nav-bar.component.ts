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

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent {
  usuario: Usuario[] = [];
  suscription?: Subscription;
  myToken = localStorage.getItem('token') || '';
  constructor(
    private loginService: LoginService,
    private http: HttpClient
  ) { }
  ngOnInit(): void {
    const token = this.myToken;
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);

    this.http.get<Usuario[]>(environment.URL_API + '/usuario/info', { headers }).subscribe(data => this.usuario = data);

  }

}

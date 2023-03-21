import { Component, inject } from '@angular/core';
import { Monstruo } from 'src/app/models/monstruo.model';
import { MonstruoService } from 'src/app/services/monstruo.service';
import { OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { LoginService } from 'src/app/services/login.service';
import { HttpInterceptor } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Usuario } from 'src/app/models/usuario.model';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-monstruo',
  templateUrl: './monstrous.component.html',
  styleUrls: ['./monstrous.component.css']
})

export class MonstruosComponent implements OnInit {
  monstruos: Monstruo[] = [];
  usuario: Usuario[] = [];
  suscription?: Subscription;
  myToken = localStorage.getItem('token') || '';

  constructor(private monstruoService: MonstruoService,
    private loginService: LoginService,
    private http: HttpClient
  ) { }

  ngOnInit(): void {
    const token = this.myToken;
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);

    this.http.get<Usuario[]>(environment.URL_API+'/usuario/info', { headers }).subscribe(data => this.usuario = data);
    this.getMonstruos();
    this.suscription = this.monstruoService.get_refresh$().subscribe(() => {
      this.getMonstruos();

    }
    );
  }

  getMonstruos() {
    this.monstruoService.getIMonstruo().subscribe(data => this.monstruos = data);
  }

}

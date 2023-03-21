import { Component, inject } from '@angular/core';
import { Chef } from 'src/app/models/chef.model';
import { ChefService } from 'src/app/services/chef.service';
import { OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { LoginService } from 'src/app/services/login.service';
import { HttpInterceptor } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Usuario } from 'src/app/models/usuario.model';
import { environment } from 'src/environments/environment';
import { interval } from 'rxjs';

@Component({
  selector: 'app-chef',
  templateUrl: './chef.component.html',
  styleUrls: ['./chef.component.css']
})

export class ChefComponent implements OnInit {
  chefs: Chef[] = [];
  usuario?: Usuario;
  suscription?: Subscription;
  myToken = localStorage.getItem('token') || '';

  constructor(private chefService: ChefService,
    private loginService: LoginService,
    private http: HttpClient
  ) { }

  ngOnInit(): void {
    const token = this.myToken;
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);

    this.http.get<Usuario>(environment.URL_API+'/usuario/infoObjeto', { headers }).subscribe(data => this.usuario = data);
    this.suscription = interval(10000).subscribe(() => {
      this.getChefs();
    });
    this.suscription = this.chefService.get_refresh$().subscribe(() => {
      this.getChefs();

    }
    );
  }
  ngOnDestroy() {
    if (this.suscription) {
      this.suscription.unsubscribe();
    }
  }

  getChefs() {
    this.chefService.getChefs().subscribe(data => this.chefs = data);
  }

}

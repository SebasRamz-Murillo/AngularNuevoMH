import { Component } from '@angular/core';
import { Location } from '@angular/common';
import { Router } from '@angular/router';
import { OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-permisos-sesion-expirada',
  templateUrl: './permisos-sesion-expirada.component.html',
  styleUrls: ['./permisos-sesion-expirada.component.css']
})
export class PermisosSesionExpiradaComponent implements OnInit {
  constructor(private location: Router) { }
  ngOnInit() {
    setTimeout(() => {this.location.navigate([''])},5000);
  }

}

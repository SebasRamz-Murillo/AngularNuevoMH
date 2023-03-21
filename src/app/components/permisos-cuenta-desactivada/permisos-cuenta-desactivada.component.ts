import { Component } from '@angular/core';
import { Location } from '@angular/common';
import { Router } from '@angular/router';
import { OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-permisos-cuenta-desactivada',
  templateUrl: './permisos-cuenta-desactivada.component.html',
  styleUrls: ['./permisos-cuenta-desactivada.component.css']
})
export class PermisosCuentaDesactivadaComponent implements OnInit{
  constructor(private location: Router) { }
  ngOnInit() {
    setTimeout(() => {this.location.navigate([''])},5000);
  }
}

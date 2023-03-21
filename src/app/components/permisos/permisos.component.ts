import { Component } from '@angular/core';
import { Location } from '@angular/common';
import { Router } from '@angular/router';
import { OnInit } from '@angular/core';

@Component({
  selector: 'app-permisos',
  templateUrl: './permisos.component.html',
  styleUrls: ['./permisos.component.css']
})
export class PermisosComponent {
  constructor(private router: Router,
    private location: Location) { }
  ngOnInit() {
    setTimeout(() => {this.location.back();},5000);
    console.log('Volviendo atras');
  }
  regresar() {
    this.location.back();
    this.location.back();
  }
}

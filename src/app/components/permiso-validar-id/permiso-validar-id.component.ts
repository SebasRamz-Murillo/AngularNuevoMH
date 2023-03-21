import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-permiso-validar-id',
  templateUrl: './permiso-validar-id.component.html',
  styleUrls: ['./permiso-validar-id.component.css']
})
export class PermisoValidarIDComponent {
  constructor(private location: Router) { }
  ngOnInit() {
    setTimeout(() => {this.location.navigate(['chef'])},5000);
  }
}

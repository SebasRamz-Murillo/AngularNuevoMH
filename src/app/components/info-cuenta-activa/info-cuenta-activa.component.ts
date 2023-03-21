import { Component } from '@angular/core';
import { Location } from '@angular/common';
import { Router } from '@angular/router';
import { OnInit } from '@angular/core';

@Component({
  selector: 'app-info-cuenta-activa',
  templateUrl: './info-cuenta-activa.component.html',
  styleUrls: ['./info-cuenta-activa.component.css']
})
export class InfoCuentaActivaComponent {
  constructor(private location: Router) { }
  ngOnInit() {
    setTimeout(() => {this.location.navigate([''])},5000);
  }
}

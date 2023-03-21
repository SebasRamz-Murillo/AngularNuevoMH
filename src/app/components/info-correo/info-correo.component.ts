import { Component } from '@angular/core';
import { Location } from '@angular/common';
import { Router } from '@angular/router';
import { OnInit } from '@angular/core';

@Component({
  selector: 'app-info-correo',
  templateUrl: './info-correo.component.html',
  styleUrls: ['./info-correo.component.css']
})
export class InfoCorreoComponent {
  constructor(private location: Router) { }
  ngOnInit() {
    setTimeout(() => {this.location.navigate([''])},5000);
  }

}

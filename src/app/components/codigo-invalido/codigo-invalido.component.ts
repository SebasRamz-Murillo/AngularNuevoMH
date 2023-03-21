import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-codigo-invalido',
  templateUrl: './codigo-invalido.component.html',
  styleUrls: ['./codigo-invalido.component.css']
})
export class CodigoInvalidoComponent {
  constructor(private location: Router) { }
  ngOnInit() {
    setTimeout(() => { this.location.navigate(['']) }, 5000);
  }

}

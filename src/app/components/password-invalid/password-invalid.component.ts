import { Component } from '@angular/core';
import { Location } from '@angular/common';
import { OnInit } from '@angular/core';


@Component({
  selector: 'app-password-invalid',
  templateUrl: './password-invalid.component.html',
  styleUrls: ['./password-invalid.component.css']
})
export class PasswordInvalidComponent {
  constructor(private location: Location) { }
  ngOnInit(): void {
    setTimeout(() => {this.location.back()},5000);
  }


}

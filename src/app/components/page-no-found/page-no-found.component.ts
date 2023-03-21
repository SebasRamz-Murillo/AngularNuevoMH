import { Component } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-page-no-found',
  templateUrl: './page-no-found.component.html',
  styleUrls: ['./page-no-found.component.css']
})
export class PageNoFoundComponent {

    constructor(
      private location: Location
    ) { }

    goBack(): void {
      this.location.back();
    }

}

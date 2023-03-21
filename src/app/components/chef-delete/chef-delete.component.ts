import { Component } from '@angular/core';
import { ActivatedRoute, Route, ParamMap } from '@angular/router';
import { OnInit, OnDestroy } from '@angular/core';
import { Chef } from 'src/app/models/chef.model';
import { ChefService } from 'src/app/services/chef.service';
import { Subscription } from 'rxjs';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Location } from '@angular/common';

@Component({
  selector: 'app-chef-delete',
  templateUrl: './chef-delete.component.html',
  styleUrls: ['./chef-delete.component.css']
})
export class ChefDeleteComponent {
  form: FormGroup;
  chef?: Chef;
  id: number = 0;
  suscription?: Subscription;

  constructor(private route: ActivatedRoute, private chefService: ChefService, private fb: FormBuilder, private location: Location) {
    this.form = this.fb.group({
      id: [this.id, Validators.required],
    });
  }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.getOneChef(this.id);
    this.suscription = this.chefService.get_refresh$().subscribe(() => {
      this.getOneChef(this.id);
    });
  }

  getOneChef(id: number) {
    this.chefService.getOneChef(id).subscribe((data: Chef) => {
      this.chef = data;
      console.log(this.chef);
      this.form.patchValue({
        id: this.chef?.id,
      });
    });
  }

  OnSubmit(values: Chef) {
    this.chefService.deleteChef(values).subscribe();
    this.form.reset();
    this.location.back();
  }
}

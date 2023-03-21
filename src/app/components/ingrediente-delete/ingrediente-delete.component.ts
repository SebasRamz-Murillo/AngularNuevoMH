import { Component } from '@angular/core';
import { ActivatedRoute, Route, ParamMap } from '@angular/router';
import { OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Ingrediente } from 'src/app/Models/ingrediente.model';
import { IngredienteService } from 'src/app/services/ingrediente.service';
import { Location } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ingrediente-delete',
  templateUrl: './ingrediente-delete.component.html',
  styleUrls: ['./ingrediente-delete.component.css']
})
export class IngredienteDeleteComponent {
  form: FormGroup;
  suscription?: Subscription;
  id: number = 0;
  ingrediente?: Ingrediente;

  constructor(private route: ActivatedRoute,
    private ingredienteService: IngredienteService,
    private fb: FormBuilder,
    private location: Location,
    private router: Router) {
    this.form = this.fb.group({
      id: [this.id, Validators.required],
    });
    }
    ngOnInit(): void {
      this.id = this.route.snapshot.params['id'];
      this.getOneIngrediente(this.id);
      this.suscription = this.ingredienteService.get_refresh$().subscribe(() => {
        this.getOneIngrediente(this.id);
      });
    }
    getOneIngrediente(id: number) {
      this.ingredienteService.getOneIngrediente(id).subscribe((data: Ingrediente) => {
        this.ingrediente = data;
        this.form.patchValue({
          id: this.ingrediente?.id,
        })
      });
    }
    OnSubmit(values: Ingrediente) {
      this.ingredienteService.deleteIngrediente(values).subscribe();
      this.form.reset();
      this.location.back();
    }
    OnBack() {
      this.location.back();
    }
    OnCancel() {
      this.router.navigate(['/ingredientes']);
    }

}

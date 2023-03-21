import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IngredienteFormEditComponent } from './ingrediente-form-edit.component';

describe('IngredienteFormEditComponent', () => {
  let component: IngredienteFormEditComponent;
  let fixture: ComponentFixture<IngredienteFormEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IngredienteFormEditComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IngredienteFormEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

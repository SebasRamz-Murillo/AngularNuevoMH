import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IngredienteDeleteComponent } from './ingrediente-delete.component';

describe('IngredienteDeleteComponent', () => {
  let component: IngredienteDeleteComponent;
  let fixture: ComponentFixture<IngredienteDeleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IngredienteDeleteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IngredienteDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

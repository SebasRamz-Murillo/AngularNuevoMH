import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ObjetoFormEditComponent } from './objeto-form-edit.component';

describe('ObjetoFormEditComponent', () => {
  let component: ObjetoFormEditComponent;
  let fixture: ComponentFixture<ObjetoFormEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ObjetoFormEditComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ObjetoFormEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MonstrousFormEditComponent } from './monstrous-form-edit.component';

describe('MonstrousFormEditComponent', () => {
  let component: MonstrousFormEditComponent;
  let fixture: ComponentFixture<MonstrousFormEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MonstrousFormEditComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MonstrousFormEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

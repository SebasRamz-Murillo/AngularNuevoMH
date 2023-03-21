import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MonstrousFormComponent } from './monstrous-form.component';

describe('MonstrousFormComponent', () => {
  let component: MonstrousFormComponent;
  let fixture: ComponentFixture<MonstrousFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MonstrousFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MonstrousFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

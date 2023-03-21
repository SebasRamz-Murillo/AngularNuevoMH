import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ObjetoFormComponent } from './objeto-form.component';

describe('ObjetoFormComponent', () => {
  let component: ObjetoFormComponent;
  let fixture: ComponentFixture<ObjetoFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ObjetoFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ObjetoFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

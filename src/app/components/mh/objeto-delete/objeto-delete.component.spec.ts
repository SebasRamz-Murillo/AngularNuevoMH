import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ObjetoDeleteComponent } from './objeto-delete.component';

describe('ObjetoDeleteComponent', () => {
  let component: ObjetoDeleteComponent;
  let fixture: ComponentFixture<ObjetoDeleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ObjetoDeleteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ObjetoDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

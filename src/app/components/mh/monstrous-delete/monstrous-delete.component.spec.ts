import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MonstrousDeleteComponent } from './monstrous-delete.component';

describe('MonstrousDeleteComponent', () => {
  let component: MonstrousDeleteComponent;
  let fixture: ComponentFixture<MonstrousDeleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MonstrousDeleteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MonstrousDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

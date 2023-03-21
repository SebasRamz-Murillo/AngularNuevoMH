import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MonstrousComponent } from './monstrous.component';

describe('MonstrousComponent', () => {
  let component: MonstrousComponent;
  let fixture: ComponentFixture<MonstrousComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MonstrousComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MonstrousComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

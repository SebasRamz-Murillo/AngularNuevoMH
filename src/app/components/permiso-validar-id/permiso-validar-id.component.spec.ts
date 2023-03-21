import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PermisoValidarIDComponent } from './permiso-validar-id.component';

describe('PermisoValidarIDComponent', () => {
  let component: PermisoValidarIDComponent;
  let fixture: ComponentFixture<PermisoValidarIDComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PermisoValidarIDComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PermisoValidarIDComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

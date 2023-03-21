import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PermisosSesionExpiradaComponent } from './permisos-sesion-expirada.component';

describe('PermisosSesionExpiradaComponent', () => {
  let component: PermisosSesionExpiradaComponent;
  let fixture: ComponentFixture<PermisosSesionExpiradaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PermisosSesionExpiradaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PermisosSesionExpiradaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

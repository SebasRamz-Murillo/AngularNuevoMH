import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PermisosCuentaDesactivadaComponent } from './permisos-cuenta-desactivada.component';

describe('PermisosCuentaDesactivadaComponent', () => {
  let component: PermisosCuentaDesactivadaComponent;
  let fixture: ComponentFixture<PermisosCuentaDesactivadaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PermisosCuentaDesactivadaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PermisosCuentaDesactivadaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

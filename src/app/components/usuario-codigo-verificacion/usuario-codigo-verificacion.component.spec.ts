import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsuarioCodigoVerificacionComponent } from './usuario-codigo-verificacion.component';

describe('UsuarioCodigoVerificacionComponent', () => {
  let component: UsuarioCodigoVerificacionComponent;
  let fixture: ComponentFixture<UsuarioCodigoVerificacionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UsuarioCodigoVerificacionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UsuarioCodigoVerificacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

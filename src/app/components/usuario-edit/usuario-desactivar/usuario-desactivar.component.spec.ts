import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsuarioDesactivarComponent } from './usuario-desactivar.component';

describe('UsuarioDesactivarComponent', () => {
  let component: UsuarioDesactivarComponent;
  let fixture: ComponentFixture<UsuarioDesactivarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UsuarioDesactivarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UsuarioDesactivarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

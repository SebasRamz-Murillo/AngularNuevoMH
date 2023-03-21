import { TestBed } from '@angular/core/testing';

import { ValidarRolUsuarioGuard } from './validar-rol-usuario.guard';

describe('ValidarRolUsuarioGuard', () => {
  let guard: ValidarRolUsuarioGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(ValidarRolUsuarioGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});

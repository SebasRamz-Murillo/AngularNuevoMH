import { TestBed } from '@angular/core/testing';

import { ValidarRolAdminUsuarioGuard } from './validar-rol-admin-usuario.guard';

describe('ValidarRolAdminUsuarioGuard', () => {
  let guard: ValidarRolAdminUsuarioGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(ValidarRolAdminUsuarioGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});

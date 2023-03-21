import { TestBed } from '@angular/core/testing';

import { ValidarContraseñaGuard } from './validar-contraseña.guard';

describe('ValidarContraseñaGuard', () => {
  let guard: ValidarContraseñaGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(ValidarContraseñaGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});

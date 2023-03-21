import { TestBed } from '@angular/core/testing';

import { ValidarCuentaGuard } from './validar-cuenta.guard';

describe('ValidarCuentaGuard', () => {
  let guard: ValidarCuentaGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(ValidarCuentaGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});

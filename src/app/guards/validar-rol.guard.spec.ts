import { TestBed } from '@angular/core/testing';

import { ValidarRolGuard } from './validar-rol.guard';

describe('ValidarRolGuard', () => {
  let guard: ValidarRolGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(ValidarRolGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});

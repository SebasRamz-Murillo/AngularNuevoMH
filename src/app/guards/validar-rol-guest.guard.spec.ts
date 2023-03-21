import { TestBed } from '@angular/core/testing';

import { ValidarRolGuestGuard } from './validar-rol-guest.guard';

describe('ValidarRolGuestGuard', () => {
  let guard: ValidarRolGuestGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(ValidarRolGuestGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});

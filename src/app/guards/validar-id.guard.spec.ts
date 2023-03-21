import { TestBed } from '@angular/core/testing';

import { ValidarIDGuard } from './validar-id.guard';

describe('ValidarIDGuard', () => {
  let guard: ValidarIDGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(ValidarIDGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});

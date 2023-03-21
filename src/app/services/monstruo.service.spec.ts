import { TestBed } from '@angular/core/testing';

import { MonstruoService } from './monstruo.service';

describe('MonstruoService', () => {
  let service: MonstruoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MonstruoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

import { TestBed } from '@angular/core/testing';

import { ObjetoService } from './mapa-objeto.service';

describe('MapaObjetoService', () => {
  let service: ObjetoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ObjetoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

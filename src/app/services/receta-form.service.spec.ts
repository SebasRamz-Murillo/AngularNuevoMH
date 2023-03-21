import { TestBed } from '@angular/core/testing';

import { RecetaFormService } from './receta-form.service';

describe('RecetaFormService', () => {
  let service: RecetaFormService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RecetaFormService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

import { TestBed } from '@angular/core/testing';

import { JaTypeaheadService } from './ja-typeahead.service';

describe('JaTypeaheadService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: JaTypeaheadService = TestBed.get(JaTypeaheadService);
    expect(service).toBeTruthy();
  });
});

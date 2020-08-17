import { TestBed } from '@angular/core/testing';

import { LaunchDataService } from './launch-data.service';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

describe('LaunchDataService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [HttpClientTestingModule],
    schemas: [NO_ERRORS_SCHEMA]
  }));

  it('should be created', () => {
    const service: LaunchDataService = TestBed.get(LaunchDataService);
    expect(service).toBeTruthy();
  });
});

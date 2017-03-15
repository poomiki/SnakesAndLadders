/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { RandomNumberServiceService } from './random-number-service.service';

describe('Service: RandomNumberService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RandomNumberServiceService]
    });
  });

  it('should ...', inject([RandomNumberServiceService], (service: RandomNumberServiceService) => {
    expect(service).toBeTruthy();
  }));
});

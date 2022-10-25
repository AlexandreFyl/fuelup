/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ApiRecordService } from './api-record.service';

describe('Service: ApiRecord', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ApiRecordService]
    });
  });

  it('should ...', inject([ApiRecordService], (service: ApiRecordService) => {
    expect(service).toBeTruthy();
  }));
});

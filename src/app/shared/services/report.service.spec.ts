import { TestBed } from '@angular/core/testing';

import { reportservice } from './report.service';

describe('reportservice', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: reportservice = TestBed.get(reportservice);
    expect(service).toBeTruthy();
  });
});

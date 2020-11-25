import { TestBed } from '@angular/core/testing';

import { NgxMailtoService } from './ngx-mailto.service';

describe('NgxMailtoService', () => {
  let service: NgxMailtoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgxMailtoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

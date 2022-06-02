import { TestBed } from '@angular/core/testing';

import { HttpCallInterceptorService } from './http-call-interceptor.service';

describe('HttpCallInterceptorService', () => {
  let service: HttpCallInterceptorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HttpCallInterceptorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

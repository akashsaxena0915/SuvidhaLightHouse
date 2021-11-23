import { TestBed } from '@angular/core/testing';

import { ServiceDescService } from './service-desc.service';

describe('ServiceDescService', () => {
  let service: ServiceDescService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServiceDescService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

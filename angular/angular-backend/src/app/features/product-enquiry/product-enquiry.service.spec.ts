import { TestBed } from '@angular/core/testing';

import { ProductEnquiryService } from './product-enquiry.service';

describe('ProductEnquiryService', () => {
  let service: ProductEnquiryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProductEnquiryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

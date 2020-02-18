import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { HttpService } from './http.service';

describe('HttpService', () => {
  let service: HttpService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    });
    service = TestBed.inject(HttpService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should have Get method', () => {
    expect(service.Get()).toBeTruthy();
  });

  it('should have Post method', () => {
    expect(service.Post({})).toBeTruthy();
  });

  it('should have Patch method', () => {
    expect(service.Patch({})).toBeTruthy();
  });

});

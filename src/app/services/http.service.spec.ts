import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { HttpService } from './http.service';
import { HttpParams } from '@angular/common/http';

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
    expect(service.Get('/users', new HttpParams().set('name', 'Kartik'))).toBeTruthy();
  });

  it('should have Post method', () => {
    expect(service.Post<any, {}>('/users', {name: 'Kartik'})).toBeTruthy();
  });

  it('should have Patch method', () => {
    expect(service.Patch({})).toBeTruthy();
  });

});

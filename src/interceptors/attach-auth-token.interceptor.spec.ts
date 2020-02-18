import { TestBed } from '@angular/core/testing';

import { AttachAuthTokenInterceptor } from './attach-auth-token.interceptor';

describe('AttachAuthTokenInterceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      AttachAuthTokenInterceptor
      ]
  }));

  it('should be created', () => {
    const interceptor: AttachAuthTokenInterceptor = TestBed.inject(AttachAuthTokenInterceptor);
    expect(interceptor).toBeTruthy();
  });
});

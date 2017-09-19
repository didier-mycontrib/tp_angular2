import { TestBed, inject } from '@angular/core/testing';

import { VerifAuthService } from './verif-auth.service';

describe('VerifAuthService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [VerifAuthService]
    });
  });

  it('should be created', inject([VerifAuthService], (service: VerifAuthService) => {
    expect(service).toBeTruthy();
  }));
});

import { TestBed } from '@angular/core/testing';

import { SpooncularService } from './spooncular.service';

describe('SpooncularService', () => {
  let service: SpooncularService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SpooncularService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

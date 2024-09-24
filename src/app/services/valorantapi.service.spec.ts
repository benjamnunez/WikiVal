import { TestBed } from '@angular/core/testing';

import { ValorantapiService } from './valorantapi.service';

describe('ValorantapiService', () => {
  let service: ValorantapiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ValorantapiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

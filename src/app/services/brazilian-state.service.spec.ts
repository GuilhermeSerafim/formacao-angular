import { TestBed } from '@angular/core/testing';

import { BrazilianStateService } from './brazilian-state.service';

describe('BrazilianStateService', () => {
  let service: BrazilianStateService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BrazilianStateService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

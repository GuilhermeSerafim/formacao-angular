import { TestBed } from '@angular/core/testing';

import { UsersPlaceholderService } from './users-placeholder.service';

describe('UsersPlaceholderService', () => {
  let service: UsersPlaceholderService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UsersPlaceholderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

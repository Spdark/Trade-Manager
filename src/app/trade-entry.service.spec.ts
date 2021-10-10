import { TestBed } from '@angular/core/testing';

import { TradeEntryService } from './trade-entry.service';

describe('TradeEntryService', () => {
  let service: TradeEntryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TradeEntryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

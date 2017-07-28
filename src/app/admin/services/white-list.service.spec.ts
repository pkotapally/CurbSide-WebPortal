import { TestBed, inject } from '@angular/core/testing';

import { WhiteListService } from './white-list.service';

describe('WhiteListService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [WhiteListService]
    });
  });

  it('should ...', inject([WhiteListService], (service: WhiteListService) => {
    expect(service).toBeTruthy();
  }));
});

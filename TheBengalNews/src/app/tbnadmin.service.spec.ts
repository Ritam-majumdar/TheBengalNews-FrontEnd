import { TestBed } from '@angular/core/testing';

import { TbnadminService } from './tbnadmin.service';

describe('TbnadminService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TbnadminService = TestBed.get(TbnadminService);
    expect(service).toBeTruthy();
  });
});

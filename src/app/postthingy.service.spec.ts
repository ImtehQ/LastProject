import { TestBed } from '@angular/core/testing';

import { PostthingyService } from './postthingy.service';

describe('PostthingyService', () => {
  let service: PostthingyService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PostthingyService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

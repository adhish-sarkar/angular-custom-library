import { TestBed } from '@angular/core/testing';

import { MyLibExampleService } from './my-lib-example.service';

describe('MyLibExampleService', () => {
  let service: MyLibExampleService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MyLibExampleService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

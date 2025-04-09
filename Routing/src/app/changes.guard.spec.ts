import { TestBed } from '@angular/core/testing';
import { CanDeactivateFn } from '@angular/router';

import { changesGuard } from '../../../Angular-App/src/app/changes.guard';

describe('changesGuard', () => {
  const executeGuard: CanDeactivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => changesGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});

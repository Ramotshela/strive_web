import { CanDeactivateFn } from '@angular/router';
import { CanComponentDeactivate } from '../../model/CanComponentDeactivate';
import { Observable } from 'rxjs';

export const canDeactivateGuard: CanDeactivateFn<CanComponentDeactivate> = (
  component: CanComponentDeactivate
): boolean | Observable<boolean> | Promise<boolean> => {
  return component.canDeactivate();
};

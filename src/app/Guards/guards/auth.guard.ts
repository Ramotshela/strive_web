import { inject } from '@angular/core';
import { Router,ActivatedRouteSnapshot, CanActivateFn, RouterStateSnapshot } from '@angular/router';


export const authGuard: CanActivateFn = (route: ActivatedRouteSnapshot, state: RouterStateSnapshot) => {

  const authenticated = localStorage.getItem('account');
  const router=inject(Router)
  if (authenticated) {
    return true;
  }
  router.navigateByUrl('/login')
  return false;

};

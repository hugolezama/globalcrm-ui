import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from '@angular/router';
import {Injectable} from '@angular/core';

import {AuthService} from './auth.service';

@Injectable()
export class AuthGuard implements CanActivate {

  constructor(private authService: AuthService, private router: Router) {
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    console.log(state.url);
    if (!this.authService.isAuthenticated()) {
      this.router.navigate(['login'], {queryParams: {returnUrl: state.url}});
      return false;
    }
    return true;
  }
}

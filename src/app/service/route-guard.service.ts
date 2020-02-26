import { HardcodedAuthenticationService } from './hardcoded-authentication.service';
import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class RouteGuardService implements CanActivate {

  constructor(
    private authenticationService: HardcodedAuthenticationService,
    private router: Router) {

  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {

    if (this.authenticationService.isUserLoggedIn())
      return true;

    this.router.navigate(['login']);

    return false;
  }
}

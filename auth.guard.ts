import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  CanDeactivate,
  Router,
  RouterStateSnapshot,
  UrlTree
} from '@angular/router';
import { Observable } from 'rxjs';
import {TokenService} from "./src/services/token.service";

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate, CanDeactivate<unknown> {
  constructor(private router: Router, private tokenService: TokenService) {
  }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

    if(localStorage.getItem('token') !== null){
        // @ts-ignore
      this.tokenService.setToken(localStorage.getItem('token'));
      this.tokenService.setLoggedIn(true)
    }
    if(this.tokenService.getIsLoggedIn()){
      localStorage.setItem('token', this.tokenService.getToken())
      // @ts-ignore
      this.tokenService.setToken(localStorage.getItem('token'));
      this.tokenService.setLoggedIn(true)
      return true
    }else{
      this.tokenService.setLoggedIn(false);
      this.tokenService.setToken('')
      this.router.navigate(['token']);
      return false
    }
  }



  canDeactivate(
    component: unknown,
    currentRoute: ActivatedRouteSnapshot,
    currentState: RouterStateSnapshot,
    nextState?: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return true;
  }

}

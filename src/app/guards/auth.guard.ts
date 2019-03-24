import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { ApiService } from '../services/api.service';

@Injectable({
  providedIn: 'root',
})
export class AuthGuardService implements CanActivate {
  constructor(
    private router: Router,
    private apiService: ApiService,
  ) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    const currentUser = this.apiService.me();
    const loginRouteMatched = state.url.match(/^\/login($|\?.+)/ig);

    if (!currentUser && !loginRouteMatched) {
      this.router.navigate(['login']);
      return false;
    } else if (currentUser && loginRouteMatched) {
      this.router.navigate(['']);
      return false;
    }

    return true;
  }
}

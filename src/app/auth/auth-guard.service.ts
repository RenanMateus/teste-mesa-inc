import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanLoad, Route, RouterStateSnapshot, UrlSegment, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate, CanLoad {

  constructor(private router: Router) { }


  verificarAcesso() {
    const token: any = sessionStorage.getItem('token');

    if (token) {
      return true;

    } else {
      this.router.navigate(['login']);
      return false;
    }
  }

  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    const token: any = sessionStorage.getItem('token');
    if (state.url == '/login') {
      if (token) {
        this.router.navigate(['/localidades']);
        return;
      } else {
        return true;
      }
    } else {
      return this.verificarAcesso();
    }
  }

  canLoad(route: Route, segments: UrlSegment[]): Observable<boolean> | Promise<boolean> | boolean {
    return this.verificarAcesso();
  }
}

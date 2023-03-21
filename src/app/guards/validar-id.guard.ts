import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ValidarIDGuard implements CanActivate {
  constructor(private router: Router) { }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    const parametro = route.params['id'];
    if (isNaN(parametro)) {
      console.log('El parámetro no es un número');
      this.router.navigate(['/idInvalido']);
      return false;
    } else {
      console.log('El parámetro es un número');
      return true;
    }
  }

}

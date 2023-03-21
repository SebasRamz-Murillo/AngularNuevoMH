import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { Usuario } from '../models/usuario.model'
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { map, catchError } from 'rxjs/operators';
import { Router } from '@angular/router';
import { throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ValidarRolAdminUsuarioGuard implements CanActivate {
  constructor(private http: HttpClient, private router: Router) { }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      const token = localStorage.getItem('token') || '';
      const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
      return this.http.get<Usuario>(environment.URL_API + '/usuario/infoObjeto', { headers }).pipe(
        map((usuario) => {
          if (usuario.rol_id == 1 || usuario.rol_id == 2) {
            return true;
            this.router.navigate(['/chef']);
          } else {
            this.router.navigate(['/error']);
            console.log('No tiene permisos para acceder a esta página');
          }
          return false;
        }),
        catchError((error: HttpErrorResponse) => {
          if (error.status === 401) {
            console.log('Token no válido');
            this.router.navigate(['/error']);
          } else {
          }
          return throwError(error.message);
        })
      );
  }

}

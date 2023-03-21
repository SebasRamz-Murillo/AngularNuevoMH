import { Token } from '@angular/compiler';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Usuario } from '../models/usuario.model';
import { LoginService } from '../services/login.service';
import { Injectable } from '@angular/core';
import { map, catchError, of } from 'rxjs';
import { throwError } from 'rxjs';
import { HttpErrorResponse } from '@angular/common/http';
import { Location } from '@angular/common';
import { Router } from '@angular/router';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ValidarRolGuard implements CanActivate {
  constructor(
    private loginService: LoginService,
    private http: HttpClient,
    private router: Router

  ) { }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    const token = localStorage.getItem('token') || '';
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    return this.http.get<Usuario>(environment.URL_API + '/usuario/infoObjeto', { headers }).pipe(
      map((usuario) => {
        if (usuario.rol_id == 1 || usuario.rol_id == 2 || usuario.rol_id == 3 ) {
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
          this.router.navigate(['/sesionExpirada']);
        } else {
        }
        return throwError(error.message);
      })
    );
  }
}

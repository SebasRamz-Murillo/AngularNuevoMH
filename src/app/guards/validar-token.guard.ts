import { Injectable } from '@angular/core';
import { HttpClient, HttpHandler } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Router } from '@angular/router';
import { HttpHeaders } from '@angular/common/http';
import { catchError, retry } from 'rxjs/operators';
import { throwError } from 'rxjs';
import { UsuarioService } from '../services/usuario.service';
import { HttpErrorResponse } from '@angular/common/http';

import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable, of } from 'rxjs'; // Agrega la importación de of
import { Usuario } from '../models/usuario.model';

@Injectable({
  providedIn: 'root'
})
export class ValidarTokenGuard implements CanActivate {

  constructor(private http: HttpClient,
    private router: Router,
    private usuarioService: UsuarioService,
    private handleError: HttpHandler) { }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    const token = localStorage.getItem('token') || '';
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });
    const httpOptions = {
      headers: headers
    };
    return this.http.get<any>(environment.URL_API + '/usuario/validarToken', httpOptions).pipe(
      catchError((error: HttpErrorResponse) => {
        if (error.ok === false || error.status === 401) {
          localStorage.removeItem('token');
          console.log(error);
          console.log('Token no válido');
          this.router.navigate(['sesionExpirada']);
          return of(false);
        } else {
          this.router.navigate(['/chef']);
          return of(true);
        }
        return throwError(error.message);
      })
    );
  }
}

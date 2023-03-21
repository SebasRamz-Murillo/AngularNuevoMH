import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError, Subject } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { Usuario } from '../models/usuario.model';
import { tap } from 'rxjs/operators';
import { HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  APIURL = environment.URL_API;
  private _refresh$ = new Subject<void>();
  private obtenerUsuarios = this.APIURL + '/usuario';
  private crearUsuario = this.APIURL + '/usuario/';
  private obtenerUsuario = this.APIURL + '/usuario/info/';
  private modificarUsuario = this.APIURL + '/usuario/update/'
  private modificarUsuarioRole = this.APIURL + '/usuario/updateRole/'
  private eliminarUsuario = this.APIURL + '/usuario/delete/'
  private validarToken = this.APIURL + '/usuario/validarToken'
  mytoken = localStorage.getItem('token');
  constructor(private http: HttpClient) { }
  get_refresh$() {
    return this._refresh$;
  }
  getUsuarios(): Observable<Usuario[]> {
    return this.http.get<Usuario[]>(this.obtenerUsuarios).pipe(retry(3), catchError(this.handleError))
  }

  getUsuario(): Observable<Usuario[]> {
    return this.http.get<Usuario[]>(this.obtenerUsuarios).pipe(retry(3), catchError(this.handleError))
  }
  addUsuarios(usuario: Usuario): Observable<Usuario> {
    return this.http.post<Usuario>(this.crearUsuario, usuario).pipe(catchError(this.handleError)).pipe(tap(() => {
      this._refresh$.next();
    }
    ));
  }
  isValidToken(): Observable<boolean> {
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${this.mytoken}`
    });
    const httpOptions = {
      headers: headers
    };
    return this.http.get<boolean>(this.validarToken, httpOptions).pipe(retry(3), catchError(this.handleError))
  }
  getOneUsuario(id: number): Observable<Usuario> {
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${this.mytoken}`
    });

    const httpOptions = {
      headers: headers
    };

    return this.http.get<Usuario>(this.obtenerUsuario + id).pipe(retry(3), catchError(this.handleError))
  }
  updateUsuario(usuario: Usuario): Observable<Usuario> {
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${this.mytoken}`
    });
    const httpOptions = {
      headers: headers
    };
    return this.http.put<Usuario>(this.modificarUsuario + usuario.id, usuario, httpOptions).pipe(catchError(this.handleError)).pipe(tap(() => {
      this._refresh$.next();
    }
    ));
  }

  updateUsuarioRol(usuario: Usuario): Observable<Usuario> {
    return this.http.put<Usuario>(this.modificarUsuarioRole + usuario.id, usuario).pipe(catchError(this.handleError)).pipe(tap(() => {
      this._refresh$.next();
    }
    ));
  }
  deleteUsuario(usuario: Usuario): Observable<Usuario[]> {
    return this.http.delete<Usuario[]>(this.eliminarUsuario + usuario.id).pipe(retry(3), catchError(this.handleError))
  }

  private handleError(error: HttpErrorResponse) {
    if (error.status === 400) {
      console.error('An error occurred:', error.error);
    } else {
      console.error('El backend devolvió el código ${error.status}, el cuerpo era:', error.error)
    }
    return throwError(() => new Error('Algo malo sucedió; por favor, inténtelo de nuevo más tarde.'));
  }
}


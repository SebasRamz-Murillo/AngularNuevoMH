import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError, Subject } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { HttpHeaders } from '@angular/common/http';
import { tap } from 'rxjs/operators';
import { Usuario } from '../models/usuario.model';

import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  APIURL = environment.URL_API + "/usuario"
  private _refresh$ = new Subject<void>();
  private crearUsuario = this.APIURL + '/crear'
  private obtenerRutaSigned = this.APIURL + '/codigo'
  private logearUsuario = this.APIURL + '/login'
  private logoutUsuario = this.APIURL + '/logout'
  private infoUsuario = this.APIURL + '/info'
  private actualizarUsuario = this.APIURL + '/update'
  private verificacion = environment.URL_API + '/verify'
  private reenviarEmail = this.APIURL + '/recuperarCuenta'
  private cambiarPassword = this.APIURL + '/cambiarPassword'


  constructor(private http: HttpClient) { }
  token: string = '';
  get_refresh$() {
    return this._refresh$;
  }
  //Peticiones para registrarse
  getRutaSigned(): Observable<Usuario[]> {
    return this.http.get<Usuario[]>(this.obtenerRutaSigned).pipe(retry(3), catchError(this.handleError))
  }
  enviarCodigo(usuario: Usuario, url: string): Observable<Usuario> {
    return this.http.post<Usuario>('http://192.168.120.87:3333'+url, usuario).pipe(catchError(this.handleError)).pipe(tap(() => {
      this._refresh$.next();
    }
    ));
  }
  //Peticiones para logearse
  login(usuario: Usuario): Observable<Usuario> {
    return this.http.post<Usuario>(this.logearUsuario, usuario).pipe(catchError(this.handleError));
  }

  logout(usuario: Usuario): Observable<Usuario> {
    return this.http.post<Usuario>(this.logoutUsuario, usuario).pipe(catchError(this.handleError)).pipe(tap(() => {
      this._refresh$.next();
    }
    ));
  }

  //Crud de Usuarios
  myToken = localStorage.getItem('token');
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${this.myToken}`
    })
  };
  getInfoUsuario(Token: any): Observable<Usuario[]> {
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${Token.token}`
    });

    const httpOptions = {
      headers: headers
    };

    return this.http.get<Usuario[]>(this.infoUsuario, httpOptions);
  }


  registrarUsuario(usuario: Usuario): Observable<Usuario> {
    return this.http.post<Usuario>(this.crearUsuario, usuario).pipe(catchError(this.handleError)).pipe(tap(() => {
      this._refresh$.next();
    }
    ));
  }
  updateUsuario(usuario: Usuario): Observable<Usuario> {
    return this.http.put<Usuario>(this.actualizarUsuario, usuario).pipe(catchError(this.handleError)).pipe(tap(() => {
      this._refresh$.next();
    }
    ));
  }

  reenviarCorreo(usuario: Usuario): Observable<Usuario> {
    return this.http.post<Usuario>(this.reenviarEmail, usuario).pipe(catchError(this.handleError)).pipe(tap(() => {
      this._refresh$.next();
    }
    ));

  }
  private handleError(error: HttpErrorResponse) {
    console.log(error); // Agregado para imprimir el error en la consola
    if (error.error instanceof ErrorEvent) {
      // Error del cliente
      console.error('Ocurrió un error:', error.error.message);
    } else {
      // Error del servidor
      console.error(
        `El servidor retornó el código ${error.status}, ` +
        `el error retornado fue: ${error.error.message}`);
    }
    // Devuelve un observable con un mensaje de error
    return throwError('Algo salió mal; por favor inténtelo de nuevo más tarde.');
  }
  cambiarContraseña(usuario: Usuario): Observable<Usuario> {
    return this.http.post<Usuario>(this.cambiarPassword, usuario).pipe(catchError(this.handleError)).pipe(tap(() => {
      this._refresh$.next();
    }
    ));

  }
}

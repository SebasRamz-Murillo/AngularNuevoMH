import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError, Subject } from 'rxjs';
import { catchError, map, retry } from 'rxjs/operators';
import { tap } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { MapaObjeto } from '../models/mapaObjeto.model';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ObjetoService {
  APIURL = environment.URL_API;
  private _refresh$ = new Subject<void>();
  private obtenerMapaObjetos = this.APIURL + '/mapaobjeto';
  private crearMapaObjeto = this.APIURL + '/mapaobjeto/insertar/';
  private modificarMapaObjeto = this.APIURL + '/mapaobjeto/modificar/';
  private eliminarMapaObjeto = this.APIURL + '/mapaobjeto/eliminar/';
  constructor(private http: HttpClient) { }
  get_refresh$() {
    return this._refresh$;
  }
  mytoken = localStorage.getItem('token');
  getIObjeto(): Observable<MapaObjeto[]> {
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${this.mytoken}`
    });

    const httpOptions = {
      headers: headers
    };

    return this.http.get<MapaObjeto[]>(this.obtenerMapaObjetos).pipe(retry(3), catchError(this.handleError))
  }

  addObjeto(objeto: MapaObjeto): Observable<MapaObjeto> {
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${this.mytoken}`
    });

    const httpOptions = {
      headers: headers
    };

    return this.http.post<MapaObjeto>(this.crearMapaObjeto, objeto).pipe(catchError(this.handleError)).pipe(tap(() => {
      this._refresh$.next();
    }
    ));
  }

  updateObjeto(objeto: MapaObjeto): Observable<MapaObjeto> {
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${this.mytoken}`
    });

    const httpOptions = {
      headers: headers
    };

    return this.http.put<MapaObjeto>(this.modificarMapaObjeto + objeto.id, objeto).pipe(catchError(this.handleError)).pipe(tap(() => {
      this._refresh$.next();
    }
    ));
  }

  deleteObjeto(objeto: MapaObjeto): Observable<MapaObjeto[]> {
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${this.mytoken}`
    });

    const httpOptions = {
      headers: headers
    };

    return this.http.delete<MapaObjeto[]>(this.eliminarMapaObjeto + objeto.id).pipe(retry(3), catchError(this.handleError))
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

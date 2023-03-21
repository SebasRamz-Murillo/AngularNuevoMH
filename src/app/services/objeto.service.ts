import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError, Subject } from 'rxjs';
import { catchError, map, retry } from 'rxjs/operators';
import { tap } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { Objeto } from '../models/objeto.model';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ObjetoService {
  APIURL = environment.URL_API;
  private _refresh$ = new Subject<void>();
  private obtenerObjetos = this.APIURL + '/objetos';
  private crearObjeto = this.APIURL + '/objetos/insertar';
  private obtenerObjeto = this.APIURL + '/objetos/';
  private modificarObjeto = this.APIURL + '/objetos/modificar/';
  private eliminarObjeto = this.APIURL + '/objetos/eliminar/';
  constructor(private http: HttpClient) { }
  get_refresh$() {
    return this._refresh$;
  }
  mytoken = localStorage.getItem('token');
  getIObjeto(): Observable<Objeto[]> {
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${this.mytoken}`
    });

    const httpOptions = {
      headers: headers
    };

    return this.http.get<Objeto[]>(this.obtenerObjetos).pipe(retry(3), catchError(this.handleError))
  }

  addObjeto(objeto: Objeto): Observable<Objeto> {
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${this.mytoken}`
    });

    const httpOptions = {
      headers: headers
    };

    return this.http.post<Objeto>(this.crearObjeto, objeto).pipe(catchError(this.handleError)).pipe(tap(() => {
      this._refresh$.next();
    }
    ));
  }

  getOneObjeto(id: number): Observable<Objeto> {
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${this.mytoken}`
    });

    const httpOptions = {
      headers: headers
    };

    return this.http.get<Objeto>(this.obtenerObjeto + id).pipe(retry(3), catchError(this.handleError))
  }

  updateObjeto(objeto: Objeto): Observable<Objeto> {
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${this.mytoken}`
    });

    const httpOptions = {
      headers: headers
    };

    return this.http.put<Objeto>(this.modificarObjeto + objeto.id, objeto).pipe(catchError(this.handleError)).pipe(tap(() => {
      this._refresh$.next();
    }
    ));
  }

  deleteObjeto(objeto: Objeto): Observable<Objeto[]> {
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${this.mytoken}`
    });

    const httpOptions = {
      headers: headers
    };

    return this.http.delete<Objeto[]>(this.eliminarObjeto + objeto.id).pipe(retry(3), catchError(this.handleError))
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

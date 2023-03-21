import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError, Subject } from 'rxjs';
import { catchError, map, retry } from 'rxjs/operators';
import { tap } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { Monstruo } from '../models/monstruo.model';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MonstruoService {
  APIURL = environment.URL_API;
  private _refresh$ = new Subject<void>();
  private obtenerMonstruos = this.APIURL + '/monstruos';
  private crearMonstruo = this.APIURL + '/monstruos/crear/';
  private obtenerMonstruo = this.APIURL + '/monstruos/';
  private modificarMonstruo = this.APIURL + '/monstruos/modificar/';
  private eliminarMonstruo = this.APIURL + '/monstruos/eliminar/';
  constructor(private http: HttpClient) { }
  get_refresh$() {
    return this._refresh$;
  }
  mytoken = localStorage.getItem('token');
  getIMonstruo(): Observable<Monstruo[]> {
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${this.mytoken}`
    });

    const httpOptions = {
      headers: headers
    };

    return this.http.get<Monstruo[]>(this.obtenerMonstruos).pipe(retry(3), catchError(this.handleError))
  }

  addMonstruo(monstruo: Monstruo): Observable<Monstruo> {
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${this.mytoken}`
    });

    const httpOptions = {
      headers: headers
    };

    return this.http.post<Monstruo>(this.crearMonstruo, monstruo).pipe(catchError(this.handleError)).pipe(tap(() => {
      this._refresh$.next();
    }
    ));
  }

  getOneMonstruo(id: number): Observable<Monstruo[]> {
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${this.mytoken}`
    });

    const httpOptions = {
      headers: headers
    };

    return this.http.get<Monstruo[]>(this.obtenerMonstruo + id).pipe(retry(3), catchError(this.handleError))
  }

  updateMonstruo(monstruo: Monstruo): Observable<Monstruo> {
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${this.mytoken}`
    });

    const httpOptions = {
      headers: headers
    };

    return this.http.put<Monstruo>(this.modificarMonstruo + monstruo.id, monstruo).pipe(catchError(this.handleError)).pipe(tap(() => {
      this._refresh$.next();
    }
    ));
  }

  deleteMonstruo(monstruo: Monstruo): Observable<Monstruo[]> {
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${this.mytoken}`
    });

    const httpOptions = {
      headers: headers
    };

    return this.http.delete<Monstruo[]>(this.eliminarMonstruo + monstruo.id).pipe(retry(3), catchError(this.handleError))
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

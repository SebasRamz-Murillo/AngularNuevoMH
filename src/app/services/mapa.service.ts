import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError, Subject } from 'rxjs';
import { catchError, map, retry } from 'rxjs/operators';
import { tap } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { Mapa } from '../models/mapa.model';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MapaService {
  APIURL = environment.URL_API;
  private _refresh$ = new Subject<void>();
  private obtenerMapas = this.APIURL+'/mapas';
  private obtenerMapa = this.APIURL+'/mapas/';

  private crearMapa = this.APIURL+'/mapas/insertar';
  private modificarMapa = this.APIURL+'/mapas/modificar/';
  private eliminarMapa = this.APIURL+'/mapas/eliminar/';
  constructor(private http: HttpClient) { }
  get_refresh$() {
    return this._refresh$;
  }
  mytoken = localStorage.getItem('token');

  getMapas(): Observable<Mapa[]> {
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${this.mytoken}`
    });

    const httpOptions = {
      headers: headers
    };

    return this.http.get<Mapa[]>(this.obtenerMapas).pipe(retry(3), catchError(this.handleError))
  }

  addMapa(mapa: Mapa): Observable<Mapa> {
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${this.mytoken}`
    });

    const httpOptions = {
      headers: headers
    };

    return this.http.post<Mapa>(this.crearMapa, mapa).pipe(catchError(this.handleError)).pipe(tap(() => {
      this._refresh$.next();
    }
    ));
  }

  getOneMapa(id:number): Observable<Mapa> {
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${this.mytoken}`
    });

    const httpOptions = {
      headers: headers
    };

    return this.http.get<Mapa>(this.obtenerMapa+id).pipe(retry(3), catchError(this.handleError))
  }

  updateMapa(mapa: Mapa): Observable<Mapa> {
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${this.mytoken}`
    });

    const httpOptions = {
      headers: headers
    };

    return this.http.put<Mapa>(this.modificarMapa+ mapa.id, mapa).pipe(catchError(this.handleError)).pipe(tap(() => {
      this._refresh$.next();
    }
    ));

  }

  deleteMapa(mapa:Mapa): Observable<Mapa[]> {
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${this.mytoken}`
    });

    const httpOptions = {
      headers: headers
    };

    return this.http.delete<Mapa[]>(this.eliminarMapa + mapa.id).pipe(retry(3), catchError(this.handleError))
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

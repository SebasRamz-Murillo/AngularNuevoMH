import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError, Subject } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { Receta } from '../models/receta.model';
import { tap } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RecetaService {
  APIURL = environment.URL_API;
  private _refresh$ = new Subject<void>();
  private obtenerRecetas = this.APIURL + '/receta/info';
  private crearReceta = this.APIURL + '/receta';
  private obtenerReceta = this.APIURL + '/receta/info/';
  private modificarReceta = this.APIURL + '/receta/update/';
  private eliminarReceta = this.APIURL + '/receta/delete/';
  private obtenerChefs = this.APIURL + '/receta/chefs';
  private obtenerRecetasChef = this.APIURL + '/chef/info/';

  constructor(private http: HttpClient) { }
  get_refresh$() {
    return this._refresh$;
  }
  mytoken = localStorage.getItem('token');
  getRecetas(): Observable<Receta[]> {
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${this.mytoken}`
    });

    const httpOptions = {
      headers: headers
    };

    return this.http.get<Receta[]>(this.obtenerRecetas).pipe(retry(3), catchError(this.handleError))
  }

  getOneReceta(id: number): Observable<Receta> {
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${this.mytoken}`
    });

    const httpOptions = {
      headers: headers
    };

    return this.http.get<Receta>(this.obtenerReceta + id).pipe(retry(3), catchError(this.handleError))
  }


  getChefs(): Observable<Receta[]> {
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${this.mytoken}`
    });

    const httpOptions = {
      headers: headers
    };

    return this.http.get<Receta[]>(this.obtenerChefs).pipe(retry(3), catchError(this.handleError))
  }

  addReceta(receta: Receta): Observable<Receta> {
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${this.mytoken}`
    });

    const httpOptions = {
      headers: headers
    };

    return this.http.post<Receta>(this.crearReceta, receta).pipe(catchError(this.handleError)).pipe(tap(() => {
      this._refresh$.next();
    }
    ));
  }

  updateReceta(receta: Receta): Observable<Receta> {
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${this.mytoken}`
    });

    const httpOptions = {
      headers: headers
    };

    return this.http.put<Receta>(this.modificarReceta + receta.id, receta).pipe(catchError(this.handleError)).pipe(tap(() => {
      this._refresh$.next();
    }
    ));
  }

  deleteIngrediente(receta: Receta): Observable<Receta[]> {
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${this.mytoken}`
    });

    const httpOptions = {
      headers: headers
    };

    return this.http.delete<Receta[]>(this.eliminarReceta + receta.id).pipe(retry(3), catchError(this.handleError))
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

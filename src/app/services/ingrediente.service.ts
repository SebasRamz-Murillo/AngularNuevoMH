import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError, Subject } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { Ingrediente } from '../models/ingrediente.model';
import { tap } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class IngredienteService {
  APIURL = environment.URL_API;
  private _refresh$ = new Subject<void>();
  private obtenerIngredientes = this.APIURL+'/ingrediente/info';
  private crearIngrediente = this.APIURL+'/ingrediente/';
  private obtenerIngrediente = this.APIURL+'/ingrediente/info/';
  private modificarIngrediente = this.APIURL+'/ingrediente/update/';
  private eliminarIngrediente = this.APIURL+'/ingrediente/delete/';

  constructor(private http: HttpClient) { }
  get_refresh$() {
    return this._refresh$;
  }
  mytoken = localStorage.getItem('token');
  getIngredientes(): Observable<Ingrediente[]> {
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${this.mytoken}`
    });

    const httpOptions = {
      headers: headers
    };

    return this.http.get<Ingrediente[]>(this.obtenerIngredientes).pipe(retry(3), catchError(this.handleError))
  }

  addIngrendiente(ingrediente: Ingrediente): Observable<Ingrediente> {
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${this.mytoken}`
    });

    const httpOptions = {
      headers: headers
    };

    return this.http.post<Ingrediente>(this.crearIngrediente, ingrediente).pipe(catchError(this.handleError)).pipe(tap(() => {
      this._refresh$.next();
    }
    ));
  }
  getOneIngrediente(id:number): Observable<Ingrediente> {
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${this.mytoken}`
    });

    const httpOptions = {
      headers: headers
    };

    return this.http.get<Ingrediente>(this.obtenerIngrediente+id).pipe(retry(3), catchError(this.handleError))
  }

  updateIngrediente(ingrediente: Ingrediente): Observable<Ingrediente> {
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${this.mytoken}`
    });
    const httpOptions = {
      headers: headers
    };
    return this.http.put<Ingrediente>(this.modificarIngrediente+ ingrediente.id, ingrediente).pipe(catchError(this.handleError)).pipe(tap(() => {
      this._refresh$.next();
    }
    ));
  }

  deleteIngrediente(ingrediente:Ingrediente): Observable<Ingrediente[]> {
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${this.mytoken}`
    });

    const httpOptions = {
      headers: headers
    };

    return this.http.delete<Ingrediente[]>(this.eliminarIngrediente + ingrediente.id).pipe(retry(3), catchError(this.handleError))
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

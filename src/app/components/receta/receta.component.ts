import { Component } from '@angular/core';
import { OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { Receta } from 'src/app/models/receta.model';
import { RecetaService } from 'src/app/services/receta.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Usuario } from 'src/app/models/usuario.model';

@Component({
  selector: 'app-receta',
  templateUrl: './receta.component.html',
  styleUrls: ['./receta.component.css']
})
export class RecetaComponent implements OnInit, OnDestroy {
  receta: Receta[] = [];
  suscription?: Subscription;
  usuario?: Usuario;
  myToken = localStorage.getItem('token') || '';

  constructor(private RecetaService: RecetaService,
    private http: HttpClient) { }
  ngOnInit(): void {
    const token = this.myToken;
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);

    this.http.get<Usuario>(environment.URL_API + '/usuario/infoObjeto', { headers }).subscribe(data => this.usuario = data);

    this.getIngredientes();
    this.suscription = this.RecetaService.get_refresh$().subscribe(() => {
      this.getIngredientes();
    });
  }

  ngOnDestroy(): void {
    this.suscription?.unsubscribe();
    console.log('Se destruyó el componente');
  }
  //Metodos
  getIngredientes() {
    this.RecetaService.getRecetas().subscribe(data => this.receta = data);
  }
}

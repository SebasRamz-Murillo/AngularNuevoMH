import { Component } from '@angular/core';
import { OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { Ingrediente } from 'src/app/Models/ingrediente.model';
import { IngredienteService } from 'src/app/services/ingrediente.service';
import { LoginService } from 'src/app/services/login.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Usuario } from 'src/app/models/usuario.model';

@Component({
  selector: 'app-ingrediente',
  templateUrl: './ingrediente.component.html',
  styleUrls: ['./ingrediente.component.css']
})
export class IngredienteComponent implements OnInit{
  ingrediente: Ingrediente[] = [];
  estado: boolean = false;
  message: string = '';
  eventSource: EventSource = new EventSource(environment.URL_API + '/stream');
  suscription?: Subscription;
  usuario?: Usuario;
  myToken = localStorage.getItem('token') || '';

  constructor(private ingredienteService: IngredienteService,
    private loginService: LoginService,
    private http: HttpClient) { }
    ngOnInit() {
      this.eventSource.onopen = () => {
        console.log('Conectado al event source');
        this.getIngredientes();

     };
      this.getIngredientes();
      this.eventSource.onerror = (error) => {
        console.log('Error en el event source');
        console.log(error);
      };
      this.eventSource.addEventListener('new:ingrediente', (event) => {
        console.log('Mensaje del event source');
        this.getIngredientes();
        console.log(event);
        this.suscription = this.ingredienteService.get_refresh$().subscribe(() => {
          this.getIngredientes();
        });
        this.message = event.data;
        this.estado = true;
      });
      this.eventSource.addEventListener('update:ingrediente', (event) => {
        console.log('Mensaje del event source');
        this.getIngredientes();
        console.log(event);
        this.suscription = this.ingredienteService.get_refresh$().subscribe(() => {
          this.getIngredientes();
        });
        this.message = event.data;
        this.estado = true;
      });
      this.eventSource.addEventListener('delete:ingrediente', (event) => {
        console.log('Mensaje del event source');
        this.getIngredientes();
        console.log(event);
        this.suscription = this.ingredienteService.get_refresh$().subscribe(() => {
          this.getIngredientes();
        });
        this.message = event.data;
        this.estado = true;
      });

      this.eventSource.addEventListener('message', (event) => {
        console.log('Mensaje del event source');
        this.getIngredientes();
        console.log(event);
        this.suscription = this.ingredienteService.get_refresh$().subscribe(() => {
          this.getIngredientes();
        });
        this.message = event.data;
        this.estado = true;
      });
    }


  //Metodos
  getIngredientes() {
    this.ingredienteService.getIngredientes().subscribe(data => this.ingrediente = data);
  }
}

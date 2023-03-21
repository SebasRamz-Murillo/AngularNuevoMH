import { Component } from '@angular/core';
import { OnInit, ChangeDetectorRef } from '@angular/core';
import { socket } from 'src/environments/socket';
import { Objeto } from 'src/app/models/objeto.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  objeto = { nombre: '', descripcion: '', rareza: '', valor: 1, limiteBolsa: 1, limiteInventario: 1 }
  cambio = false;


  title = 'PracticaAngular';
  constructor(private cd: ChangeDetectorRef) { }
  ngOnInit(): void {
    this.emitirEvento();
  }

  emitirEvento() {
    socket.on("connect", () => {
      console.log(socket.id); // x8WIv7-mJelg7on_ALbx
    });
    socket.on('eliminarObjeto', (objetos) => {
      console.log(objetos)
      this.cambio = true;
      this.objeto = objetos;
      this.cd.detectChanges();
      // manejar los objetos recibidos aquí
    })
  }
}

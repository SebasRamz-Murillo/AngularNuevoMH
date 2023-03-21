import { Component } from '@angular/core';
import { MapaObjeto } from 'src/app/models/mapaObjeto.model';
import { ObjetoService } from 'src/app/services/mapa-objeto.service';
import { OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-objeto',
  templateUrl: './zona-objeto.component.html',
  styleUrls: ['./zona-objeto.component.css']
})
export class MapaObjetoComponent implements OnInit, OnDestroy {
  objetos: MapaObjeto[] = [];
  suscription?:Subscription;

  constructor(private ObjetoService: ObjetoService) { }
  ngOnInit(): void {
    this.getObjetos();
    this.suscription = this.ObjetoService.get_refresh$().subscribe(() => {
      this.getObjetos();
    }
    );
  }
  ngOnDestroy():void {
    this.suscription?.unsubscribe();
    console.log('Se destruyó el componente');
  }
  getObjetos() {
    this.ObjetoService.getIObjeto().subscribe((data: MapaObjeto[]) => this.objetos = data);
  }
}

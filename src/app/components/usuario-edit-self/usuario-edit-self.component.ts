import { Component } from '@angular/core';
import { ActivatedRoute, Route, ParamMap } from '@angular/router';
import { Usuario } from 'src/app/models/usuario.model';
import { UsuarioService } from 'src/app/services/usuario.service';
import { OnInit, OnDestroy } from '@angular/core';
import { Injectable } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Location } from '@angular/common';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-usuario-edit-self',
  templateUrl: './usuario-edit-self.component.html',
  styleUrls: ['./usuario-edit-self.component.css']
})
export class UsuarioEditSelfComponent {
  form: FormGroup;
  user?: Usuario;
  muToken = localStorage.getItem('token') || '';
  usuario?: Usuario;
  suscription?: Subscription;
  id: number = 0;

  constructor(
    private route: ActivatedRoute,
    private usuarioService: UsuarioService,
    private location: Location,
    private fb: FormBuilder,
    private http: HttpClient,
  ) {
    this.form = this.fb.group({
      id: ['', Validators.required],
      name: ['', Validators.required],
      ap_paterno: ['', Validators.required],
      ap_materno: ['', Validators.required],
      activo : ['', Validators.required]
    });
  }

  ngOnInit(): void {
    this.muToken;
    const token = this.muToken;
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    this.http.get<Usuario>(environment.URL_API + '/usuario/infoObjeto', { headers }).subscribe(data => this.user = data);


    this.id = this.route.snapshot.params['id'];
    this.getOneUsuario(this.id);
    this.suscription = this.usuarioService.get_refresh$().subscribe(() => {
      this.getOneUsuario(this.id);
    });
  }

  ngOnDestroy(): void {
    this.suscription?.unsubscribe();
  }

  getOneUsuario(id: number): void {
    this.usuarioService.getOneUsuario(id).subscribe((data: Usuario) => {
      this.usuario = data;
      this.form.patchValue({
        id: this.usuario.id,
        name: this.usuario.name,
        ap_paterno: this.usuario?.ap_paterno,
        ap_materno: this.usuario?.ap_materno,
        activo: this.usuario?.activo
      });
    });
  }

  OnSubmit(values: Usuario): void {
    // Obtener el valor actual del usuario2 y modificar únicamente el rol
    // Llamar al servicio de actualización de usuario con el objeto actualizado
    this.usuarioService.updateUsuario(values).subscribe();
    this.location.back();
    // Resetear el formulario
    this.form.reset();
  };

}

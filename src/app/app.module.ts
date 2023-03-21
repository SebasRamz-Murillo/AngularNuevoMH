import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { HeaderComponent } from './components/header/header.component';
import { UsuarioComponent } from './components/usuario/usuario.component';
import { PageNoFoundComponent } from './components/page-no-found/page-no-found.component';
import { TableComponent } from './components/table/table.component';
import { ChefComponent } from './components/chef/chef.component';
import { ChefFormComponent } from './components/chef-form/chef-form.component';
import { ChefFormEditComponent } from './components/chef-form-edit/chef-form-edit.component';
import { ChefDeleteComponent } from './components/chef-delete/chef-delete.component';
import { IngredienteComponent } from './components/ingrediente/ingrediente.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { IngredienteFormComponent } from './components/ingrediente-form/ingrediente-form.component';
import { IngredienteFormEditComponent } from './components/ingrediente-form-edit/ingrediente-form-edit.component';
import { IngredienteDeleteComponent } from './components/ingrediente-delete/ingrediente-delete.component';
import { RecetaComponent } from './components/receta/receta.component';
import { RecetaFormComponent } from './components/receta-form/receta-form.component';
import { RecetaFormEditComponent } from './components/receta-form-edit/receta-form-edit.component';
import { RecetaDeleteComponent } from './components/receta-delete/receta-delete.component';

import { CodigoComponent } from './components/codigo/codigo.component';
import { RegistroComponent } from './components/registro/registro.component';
import { UsuarioRegistroComponent } from './components/usuario-registro/usuario-registro.component';
import { UsuarioCodigoVerificacionComponent } from './components/usuario-codigo-verificacion/usuario-codigo-verificacion.component';
import { TokenInterceptor } from './Interceptors/token.interceptor';
import { MapaComponent } from './components/mh/mapa/mapa.component';
import { MapaDeleteComponent } from './components/mh/mapa-delete/mapa-delete.component';
import { MapaFormComponent } from './components/mh/mapa-form/mapa-form.component';
import { MapaFormEditComponent } from './components/mh/mapa-form-edit/mapa-form-edit.component';
import { ObjetoComponent } from './components/mh/objeto/objeto.component';
import { ObjetoDeleteComponent } from './components/mh/objeto-delete/objeto-delete.component';
import { ObjetoFormComponent } from './components/mh/objeto-form/objeto-form.component';
import { ObjetoFormEditComponent } from './components/mh/objeto-form-edit/objeto-form-edit.component';
import { MapaObjetoComponent } from './components/mh/zona-objeto/zona-objeto.component';
import { ZonaDeleteComponent } from './components/mh/zona-delete/zona-delete.component';
import { ZonaObjetoFormComponent } from './components/mh/zona-objeto-form/zona-objeto-form.component';
import { ZonaObjetoFormEditComponent } from './components/mh/zona-objeto-form-edit/zona-objeto-form-edit.component';
import { MonstruosComponent } from './components/mh/monstrous/monstrous.component';
import { MonstrousDeleteComponent } from './components/mh/monstrous-delete/monstrous-delete.component';
import { MonstrousFormComponent } from './components/mh/monstrous-form/monstrous-form.component';
import { MonstrousFormEditComponent } from './components/mh/monstrous-form-edit/monstrous-form-edit.component';
import { PermisosComponent } from './components/permisos/permisos.component';
import { PermisosSesionExpiradaComponent } from './components/permisos-sesion-expirada/permisos-sesion-expirada.component';
import { PermisosCuentaDesactivadaComponent } from './components/permisos-cuenta-desactivada/permisos-cuenta-desactivada.component';
import { UsuarioEditComponent } from './components/usuario-edit/usuario-edit.component';
import { UsuarioEditRoleComponent } from './components/usuario-edit-role/usuario-edit-role.component';
import { PermisoValidarIDComponent } from './components/permiso-validar-id/permiso-validar-id.component';
import { InfoCorreoComponent } from './components/info-correo/info-correo.component';
import { InfoCuentaActivaComponent } from './components/info-cuenta-activa/info-cuenta-activa.component';
import { UsuarioDesactivarComponent } from './components/usuario-edit/usuario-desactivar/usuario-desactivar.component';
import { LoginAlternoComponent } from './components/login-alterno/login-alterno.component';
import { UsuarioEditSelfComponent } from './components/usuario-edit-self/usuario-edit-self.component';
import { ReenviarCodigoComponent } from './components/reenviar-codigo/reenviar-codigo.component';
import { CodigoInvalidoComponent } from './components/codigo-invalido/codigo-invalido.component';
import { CambiarPasswordComponent } from './components/cambiar-password/cambiar-password.component';
import { PasswordInvalidComponent } from './components/password-invalid/password-invalid.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HeaderComponent,
    UsuarioComponent,
    PageNoFoundComponent,
    TableComponent,
    ChefComponent,
    ChefFormComponent,
    ChefFormEditComponent,
    ChefDeleteComponent,
    IngredienteComponent,
    NavBarComponent,
    IngredienteFormComponent,
    IngredienteFormEditComponent,
    IngredienteDeleteComponent,
    RecetaComponent,
    RecetaFormComponent,
    RecetaFormEditComponent,
    RecetaDeleteComponent,
    CodigoComponent,
    RegistroComponent,
    UsuarioRegistroComponent,
    UsuarioCodigoVerificacionComponent,
    MapaComponent,
    MapaDeleteComponent,
    MapaFormComponent,
    MapaFormEditComponent,
    ObjetoComponent,
    ObjetoDeleteComponent,
    ObjetoFormComponent,
    ObjetoFormEditComponent,
    MapaObjetoComponent,
    ZonaDeleteComponent,
    ZonaObjetoFormComponent,
    ZonaObjetoFormEditComponent,
    MonstruosComponent,
    MonstrousDeleteComponent,
    MonstrousFormComponent,
    MonstrousFormEditComponent,
    PermisosComponent,
    PermisosSesionExpiradaComponent,
    PermisosCuentaDesactivadaComponent,
    UsuarioEditComponent,
    UsuarioEditRoleComponent,
    UsuarioDesactivarComponent,
    PermisoValidarIDComponent,
    InfoCorreoComponent,
    InfoCuentaActivaComponent,
    LoginAlternoComponent,
    UsuarioEditSelfComponent,
    ReenviarCodigoComponent,
    CodigoInvalidoComponent,
    CambiarPasswordComponent,
    PasswordInvalidComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [{provide: HTTP_INTERCEPTORS, useClass: TokenInterceptor, multi: true}],
  bootstrap: [AppComponent]
})
export class AppModule { }

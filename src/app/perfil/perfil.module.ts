import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { PerfilRoutingModule } from './perfil-routing.module';
import { DadosUsuarioComponent } from './dados-usuario/dados-usuario.component';
import { ListaUsuarioComponent } from './lista-usuario/lista-usuario.component';


@NgModule({
  declarations: [
    DadosUsuarioComponent,
    ListaUsuarioComponent
  ],
  imports: [
    CommonModule,
    PerfilRoutingModule,
    FormsModule,
    HttpClientModule,
    NgbModule
  ]
})
export class PerfilModule { }

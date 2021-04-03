import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AgmCoreModule } from '@agm/core';

import { LocalidadesRoutingModule } from './localidades-routing.module';
import { ListaLocalidadesComponent } from './lista-localidades/lista-localidades.component';
import { MapaLocalidadesComponent } from './mapa-localidades/mapa-localidades.component';


@NgModule({
  declarations: [
    ListaLocalidadesComponent,
    MapaLocalidadesComponent
  ],
  imports: [
    CommonModule,
    LocalidadesRoutingModule,
    FormsModule,
    HttpClientModule,
    NgbModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyDZ6w8Yz9beWeB6mYqEa07i79l-OGULvDY'
    })
  ]
})
export class LocalidadesModule { }

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListaLocalidadesComponent } from './lista-localidades/lista-localidades.component';
import { MapaLocalidadesComponent } from './mapa-localidades/mapa-localidades.component';

const routes: Routes = [
  {
    path: '',
    component: MapaLocalidadesComponent
  },
  {
    path: 'lista',
    component: ListaLocalidadesComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LocalidadesRoutingModule { }

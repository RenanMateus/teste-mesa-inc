import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DadosUsuarioComponent } from './dados-usuario/dados-usuario.component';
import { ListaUsuarioComponent } from './lista-usuario/lista-usuario.component';

const routes: Routes = [
  {
    path: '',
    component: ListaUsuarioComponent
  },
  {
    path: 'novo',
    component: DadosUsuarioComponent
  },
  {
    path: ':id',
    component: DadosUsuarioComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PerfilRoutingModule { }

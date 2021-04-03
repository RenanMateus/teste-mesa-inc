import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { CadastroUsuarioComponent } from './cadastro-usuario/cadastro-usuario.component';
import { AuthGuardService } from './auth/auth-guard.service';

const routes: Routes = [
  {
    path: 'perfil',
    loadChildren: () => import('./perfil/perfil.module').then(m => m.PerfilModule),
    canActivate: [AuthGuardService],
    canLoad: [AuthGuardService]
  },
  {
    path: 'localidades',
    loadChildren: () => import('./localidades/localidades.module').then(m => m.LocalidadesModule),
    canActivate: [AuthGuardService],
    canLoad: [AuthGuardService]
  },

  // ROTAS QUE NÃO PRECISAM DE AUTENTICAÇÃO
  {
    path: 'login',
    component: LoginComponent,
    canActivate: [AuthGuardService]
  },
  {
    path: 'cadastro',
    component: CadastroUsuarioComponent
  },
  {
    path: '',
    redirectTo: 'localidades',
    pathMatch: 'full',
  },
  {
    path: '**',
    redirectTo: 'localidades'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AgmCoreModule } from '@agm/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ComponentesFixosModule } from './componentes-fixos/componentes-fixos.module';
import { LoginComponent } from './login/login.component';
import { CadastroUsuarioComponent } from './cadastro-usuario/cadastro-usuario.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    CadastroUsuarioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    ComponentesFixosModule,
    FormsModule,
    HttpClientModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyDZ6w8Yz9beWeB6mYqEa07i79l-OGULvDY'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

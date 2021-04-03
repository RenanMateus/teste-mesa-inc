import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';

import { UsuarioLogin } from '../classes/usuario';
import { environment } from '../../environments/environment';
import { Toasts } from '../utils/alertas';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  @Output() logado: EventEmitter<any> = new EventEmitter();
  @Output() cadastro: EventEmitter<any> = new EventEmitter();
  usuario: UsuarioLogin = new UsuarioLogin();
  fazendoLogin = false;
  headers: HttpHeaders = new HttpHeaders({
    'Access-Control-Allow-Origin': '*'
  });

  constructor(private router: Router, private http: HttpClient) { }


  login() {
    // this.usuario.email = 'eve.holt@reqres.in';
    // this.usuario.password = 'citysli';
    this.fazendoLogin = true;
    this.http.post(environment.apiUrl + 'login', { email: 'eve.holt@reqres.in', password: 'citysli' }, { headers: this.headers, params: { delay: '3' } }).subscribe((response: any) => {
      if (response) {
        sessionStorage.setItem('token', JSON.stringify(response.token));
        this.logado.emit(true);
        this.router.navigate(['inicio']);

      } else {
        Toasts.mensagemErro('Error');
        this.fazendoLogin = false;
      }
    }, () => {
      Toasts.mensagemErroConexao();
      this.fazendoLogin = false;
    });
  }

  irParaCadastro() {
    this.cadastro.emit(true);
    this.router.navigate(['cadastro']);
  }
}

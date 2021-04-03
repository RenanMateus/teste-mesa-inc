import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';

import { Usuario, ResponstaUsuario } from '../classes/usuario';
import { environment } from '../../environments/environment';
import { Toasts } from '../utils/alertas';

@Component({
  selector: 'app-cadastro-usuario',
  templateUrl: './cadastro-usuario.component.html',
  styleUrls: ['./cadastro-usuario.component.css']
})
export class CadastroUsuarioComponent {
  salvando = false;
  usuario: Usuario = new Usuario();
  @Output() cadastro: EventEmitter<any> = new EventEmitter();
  headers: HttpHeaders = new HttpHeaders({
    'Access-Control-Allow-Origin': '*'
  });

  constructor(private http: HttpClient, private router: Router) { }


  salvar() {
    this.salvando = true;
    this.http.post(environment.apiUrl + 'Users', this.usuario, { headers: this.headers, params: { delay: '3' } }).subscribe((response: ResponstaUsuario) => {
      if (response) {
        Toasts.mensagemSucesso('Usuário cadastrado com sucesso');
        this.cadastro.emit(false);
        this.router.navigate(['login']);

      } else {
        Toasts.mensagemErro('Erro');
        this.salvando = false;
      }
    }, () => {
      Toasts.mensagemErroConexao();
      this.salvando = false;
    });
  }

  voltar() {
    this.cadastro.emit(false);
    this.router.navigate(['login']);
  }

  transformarEmBase64(inputValue: any): void {
    const file: File = inputValue.files[0];
    const myReader: FileReader = new FileReader();

    myReader.onloadend = (e) => {
      this.usuario.avatar = myReader.result;
    };
    myReader.readAsDataURL(file);
  }
}

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Toasts } from '../../utils/alertas';
import { environment } from '../../../environments/environment';
import { Usuario, ResponstaUsuario } from '../../classes/usuario';

@Component({
  selector: 'app-dados-usuario',
  templateUrl: './dados-usuario.component.html',
  styleUrls: ['./dados-usuario.component.css']
})
export class DadosUsuarioComponent implements OnInit {
  idUsuario = this.route.snapshot.paramMap.get('id');
  @Output() cadastro: EventEmitter<any> = new EventEmitter();
  salvando = false;
  carregando = true;
  usuario: Usuario = new Usuario();
  headers: HttpHeaders = new HttpHeaders({
    'Access-Control-Allow-Origin': '*'
  });


  constructor(private http: HttpClient, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    if (this.idUsuario) {
      this.buscarUsuario();
    } else {
      this.carregando = false;
    }
  }


  buscarUsuario() {
    this.http.get(environment.apiUrl + 'users/' + this.idUsuario, { headers: this.headers, params: { delay: '3' } }).subscribe((response: ResponstaUsuario) => {
      if (response) {
        this.usuario = response.data;
        this.carregando = false;

      } else {
        Toasts.mensagemErro('Erro');
        this.carregando = false;
      }
    }, () => {
      Toasts.mensagemErroConexao();
      this.carregando = false;
    });
  }

  salvar() {
    this.salvando = true;
    if (this.idUsuario) {
      this.http.put(environment.apiUrl + 'Users/' + this.usuario.id, this.usuario, { headers: this.headers, params: { delay: '3' } }).subscribe((response: ResponstaUsuario) => {
        if (response) {
          Toasts.mensagemSucesso('Usuário atualizado com sucesso');
          this.router.navigate(['perfil']);

        } else {
          Toasts.mensagemErro('Erro');
          this.salvando = false;
        }
      }, () => {
        Toasts.mensagemErroConexao();
        this.salvando = false;
      });

    } else {
      this.http.post(environment.apiUrl + 'users', this.usuario, { headers: this.headers, params: { delay: '3' } }).subscribe((response: ResponstaUsuario) => {
        if (response) {
          Toasts.mensagemSucesso('Usuário criado com sucesso');
          this.router.navigate(['perfil']);

        } else {
          Toasts.mensagemErro('Erro');
          this.salvando = false;
        }
      }, () => {
        Toasts.mensagemErroConexao();
        this.salvando = false;
      });
    }
  }

  voltar() {
    this.router.navigate(['perfil']);
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

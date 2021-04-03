import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Usuario, ResponstaListaUsuarios } from '../../classes/usuario';
import { environment } from '../../../environments/environment.prod';
import { Toasts } from '../../utils/alertas';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-lista-usuario',
  templateUrl: './lista-usuario.component.html',
  styleUrls: ['./lista-usuario.component.css']
})
export class ListaUsuarioComponent implements OnInit {
  carregando = true;
  usuarios: Usuario[] = new Array();
  paginaAtual = 0;
  itensPorPagina = 0;
  totalItens = 0;


  constructor(private http: HttpClient, private router: Router) { }

  ngOnInit(): void {
    this.listarUsuarios(1);
  }


  listarUsuarios(pagina) {
    this.carregando = true;
    this.paginaAtual = pagina;
    this.http.get(environment.apiUrl + 'users', { params: { page: this.paginaAtual.toString(), delay: '3' } }).subscribe((response: ResponstaListaUsuarios) => {
      if (response.data.length > 0) {
        this.totalItens = response.total;
        this.itensPorPagina = response.per_page;
        this.paginaAtual = response.page;
        this.usuarios = response.data;
        this.carregando = false;

      } else {
        Toasts.mensagemErro('Error');
        this.carregando = false;
      }
    }, () => {
      Toasts.mensagemErroConexao();
      this.carregando = false;
    });
  }

  novo() {
    this.router.navigate(['perfil/novo']);
  }

  editar(id) {
    this.router.navigate(['perfil', id]);
  }

  excluir(id) {
    Swal.fire({
      title: 'Deseja realmente excluir o usuário?',
      icon: 'info',
      showCancelButton: true,
      confirmButtonText: 'Excluir',
      cancelButtonText: 'Cancelar'
    }).then((result) => {
      if (result.isConfirmed) {
        this.carregando = true;
        this.http.delete(environment.apiUrl + 'users/' + id, { params: { delay: '3' } }).subscribe(() => {
          this.listarUsuarios(this.paginaAtual);
          Toasts.mensagemSucesso('Usuário excluido');
          this.carregando = false;

        }, () => {
          Toasts.mensagemErroConexao();
          this.carregando = false;
        });

      }
    });
  }
}

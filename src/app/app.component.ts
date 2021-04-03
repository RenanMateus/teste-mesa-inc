import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'localizacoes';
  logado = false;
  cadastro = false;


  ngOnInit() {
    if (sessionStorage.getItem('token')) {
      this.logado = true;
    }
  }

  verificarLogin(evento) {
    this.logado = evento;
  }

  verificarRota(evento) {
    this.cadastro = evento;
  }
}

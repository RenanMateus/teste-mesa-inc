import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

import { Toasts } from '../../utils/alertas';
import { ListaLocais } from './lista-locais.const';

@Component({
  selector: 'app-lista-localidades',
  templateUrl: './lista-localidades.component.html',
  styleUrls: ['./lista-localidades.component.css']
})
export class ListaLocalidadesComponent implements OnInit {
  carregando = false;
  page = 1;
  locais = new Array();
  latitudeLongitude: string;
  headers: HttpHeaders = new HttpHeaders({
    'Access-Control-Allow-Origin': 'https://teste-mesa-inc.herokuapp.com'
  });
  result = new Array();
  keyGoogle = 'AIzaSyDZ6w8Yz9beWeB6mYqEa07i79l-OGULvDY';


  constructor(private http: HttpClient) {
  }

  ngOnInit() {
    navigator.geolocation.getCurrentPosition(geoSuccess => {
      this.latitudeLongitude = `${geoSuccess.coords.latitude},${geoSuccess.coords.longitude}`;
      this.buscarLocais();
    });

    this.locais = ListaLocais;
  }


  buscarLocais() {
    this.http.get('https://maps.googleapis.com/maps/api/place/nearbysearch/json',
      { params: { location: this.latitudeLongitude, radius: '5000', key: this.keyGoogle }, headers: this.headers })
      .subscribe((response: any) => {
        console.log('resposta', response);
      }, () => {
        Toasts.mensagemErroConexao();
      });
  }
}

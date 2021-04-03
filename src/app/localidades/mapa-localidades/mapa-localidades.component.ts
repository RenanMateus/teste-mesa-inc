import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Toasts } from '../../utils/alertas';

@Component({
  selector: 'app-mapa-localidades',
  templateUrl: './mapa-localidades.component.html',
  styleUrls: ['./mapa-localidades.component.css']
})
export class MapaLocalidadesComponent implements OnInit {
  latitude: any;
  longitude: any;
  carregando = true;
  headers: HttpHeaders = new HttpHeaders({
    'Access-Control-Allow-Origin': '*'
  });


  constructor(private http: HttpClient, private router: Router) { }

  ngOnInit(): void {
    navigator.geolocation.getCurrentPosition(geoSuccess => {
      this.latitude = geoSuccess.coords.latitude;
      this.longitude = geoSuccess.coords.longitude;
      this.carregando = false;
      console.log('latitude', this.latitude);
      console.log('longitude', this.longitude);
    });
  }


  obterDetalhes(id) {
    this.http.get('https://maps.googleapis.com/maps/api/place/details/json',
      { params: { place_id: id, key: 'AIzaSyDZ6w8Yz9beWeB6mYqEa07i79l-OGULvDY' }, withCredentials: true })
      .subscribe((response: any) => {
        console.log('resposta', response);
      }, () => {
        Toasts.mensagemErroConexao();
      });
  }

  visualizarLista() {
    this.router.navigate(['localidades/lista']);
  }
}

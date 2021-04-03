import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  @Output() logado: EventEmitter<any> = new EventEmitter();


  constructor(private router: Router) { }

  ngOnInit(): void {
  }


  sair() {
    sessionStorage.removeItem('token');
    this.logado.emit(false);
    this.router.navigate(['login']);
  }

}

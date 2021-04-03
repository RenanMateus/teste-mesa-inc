import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MapaLocalidadesComponent } from './mapa-localidades.component';

describe('MapaLocalidadesComponent', () => {
  let component: MapaLocalidadesComponent;
  let fixture: ComponentFixture<MapaLocalidadesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MapaLocalidadesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MapaLocalidadesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

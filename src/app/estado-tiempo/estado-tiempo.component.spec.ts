import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EstadoTiempoComponent } from './estado-tiempo.component';

describe('EstadoTiempoComponent', () => {
  let component: EstadoTiempoComponent;
  let fixture: ComponentFixture<EstadoTiempoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EstadoTiempoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EstadoTiempoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

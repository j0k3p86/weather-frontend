import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {EstadoTiempoModalComponent} from './estado-tiempo-modal.component';

describe('EstadoTiempoModalComponent', () => {
  let component: EstadoTiempoModalComponent;
  let fixture: ComponentFixture<EstadoTiempoModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EstadoTiempoModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EstadoTiempoModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

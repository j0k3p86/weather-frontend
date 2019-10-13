import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {CrearModalComponent} from './crear-modal.component';

describe('EstadoTiempoModalComponent', () => {
  let component: CrearModalComponent;
  let fixture: ComponentFixture<CrearModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CrearModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrearModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

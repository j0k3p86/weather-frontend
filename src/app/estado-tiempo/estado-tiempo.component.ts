import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {EstadoTiempo} from '@app/models/estado-tiempo';
import {Observable} from 'rxjs';
import {IqSelect2Item} from 'ng2-iq-select2';
import {map, tap} from 'rxjs/operators';
import {Router} from '@angular/router';
import {BsModalRef, BsModalService} from 'ngx-bootstrap';
import {CrearModalComponent} from '@app/crear-modal/crear-modal.component';
import {EstadoTiempoModalComponent} from '@app/estado-tiempo-modal/estado-tiempo-modal.component';


@Component({
  selector: 'app-estado-tiempo',
  templateUrl: './estado-tiempo.component.html'
})
export class EstadoTiempoComponent implements OnInit {

  @Input() estadoTiempo: EstadoTiempo;
  @Output() public remove: EventEmitter<any> = new EventEmitter<any>();
  bsModalRef: BsModalRef;

  constructor(private modalService: BsModalService) {
  }

  ngOnInit() {
  }

  borrar() {
    this.remove.emit(this.estadoTiempo.stringLocation);
  }

  goToModal() {
    this.bsModalRef = this.modalService.show(EstadoTiempoModalComponent, {
      class: 'modal-xs',
      backdrop: 'static',
      initialState: {
        stringLocation: this.estadoTiempo.stringLocation,
        estadoTiempo: this.estadoTiempo,
        callbacks: {
          // aceptar: (param) => this.crearBoard(param),
        }
      }
    });
  }
}

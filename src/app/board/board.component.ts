import {Component, OnDestroy, OnInit} from '@angular/core';
import {BoardDto} from '@app/models/board-dto';
import {FormBuilder, FormGroup} from '@angular/forms';
import {ActivatedRoute} from '@angular/router';
import {WeatherService} from '@app/services/weather.service';
import {CrearModalComponent} from '@app/crear-modal/crear-modal.component';
import {BsModalRef, BsModalService} from 'ngx-bootstrap';
import {Subscription, timer} from 'rxjs';


@Component({
  selector: 'app-board',
  templateUrl: './board.component.html'
})
export class BoardComponent implements OnInit, OnDestroy {
  nombreBoard: string;
  boardDto: BoardDto;
  bsModalRef: BsModalRef;
  intervalRefresh: Subscription;

  private readonly INTERVALO = 1000 * 30;


  constructor(protected activatedRoute: ActivatedRoute,
              private weatherService: WeatherService,
              private modalService: BsModalService) {
  }

  ngOnInit() {
    this.nombreBoard = this.activatedRoute.snapshot.params['nombre'];
    this.loadFromBackend();


    this.refrezcoPeriodico();
  }


  removeChild(index) {
    this.weatherService.removeLocation(this.boardDto.nombreBoard, this.boardDto.estadoTiempoList[index].stringLocation).subscribe(value => {
      this.loadFromBackend();
    });
  }


  crearBoardModal() {
    this.bsModalRef = this.modalService.show(CrearModalComponent, {
      class: 'modal-xs',
      backdrop: 'static',
      initialState: {
        nuevoString: 'ubicacion',
        callbacks: {
          aceptar: (param) => this.agregarLocation(param),
        }
      }
    });
  }


  agregarLocation(location: string) {
    this.weatherService.agregarLocation(this.boardDto.nombreBoard, location).subscribe(value => {
      this.loadFromBackend();
    });
  }

  refrezcoPeriodico() {
    this.intervalRefresh = timer(this.INTERVALO, this.INTERVALO)
      .subscribe(() => {
        this.loadFromBackend();
      });
  }

  private loadFromBackend() {
    this.weatherService.findBoardDtoByNombre(this.nombreBoard).subscribe(boardDto => this.boardDto = boardDto);
  }

  ngOnDestroy(): void {
    if (this.intervalRefresh) {
      this.intervalRefresh.unsubscribe();
    }
  }
}

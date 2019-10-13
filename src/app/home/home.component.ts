import {Component, OnInit} from '@angular/core';
import {WeatherService} from '@app/services/weather.service';
import {Board} from '@app/models/board';
import {Router} from '@angular/router';
import {CrearModalComponent} from '@app/crear-modal/crear-modal.component';
import {BsModalRef, BsModalService} from 'ngx-bootstrap';

@Component({templateUrl: 'home.component.html'})
export class HomeComponent implements OnInit {

  loading = false;
  boards: Board[];
  bsModalRef: BsModalRef;

  constructor(private weatherService: WeatherService,
              private router: Router,
              private modalService: BsModalService) {
  }

  ngOnInit() {
    this.loadFromBackend();
  }

  goToBoard(nombreBoard: string) {
    this.router.navigate(['/board/' + nombreBoard]);
  }

  crearBoardModal() {
    this.bsModalRef = this.modalService.show(CrearModalComponent, {
      class: 'modal-xs',
      backdrop: 'static',
      initialState: {
        nuevoString: 'board',
        callbacks: {
          aceptar: (param) => this.crearBoard(param),
        }
      }
    });
  }

  crearBoard(nombreBoard: string) {
    this.weatherService.createBoard(nombreBoard).subscribe(board => {
      this.loadFromBackend();
    });
  }

  private loadFromBackend() {
    this.loading = true;
    this.weatherService.listBoardByUsuariId().subscribe(boards => {
      this.boards = boards;
      this.loading = false;
    });
  }

  removeBoard(nombreBoard: string) {
    this.weatherService.removeBoard(nombreBoard).subscribe(value => {
      this.loadFromBackend();
    });
  }
}

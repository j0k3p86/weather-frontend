import {Component, Input, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {BsModalRef} from 'ngx-bootstrap';
import {WeatherService} from '@app/services/weather.service';
import {EstadoTiempo} from '@app/models/estado-tiempo';

@Component({
  selector: 'app-estado-tiempo-modal',
  templateUrl: './estado-tiempo-modal.component.html',
})

export class EstadoTiempoModalComponent implements OnInit {

  callbacks;
  stringLocation: string;
  form: FormGroup;
  estadoTiempo: EstadoTiempo;
  @Input() invalid;

  dates = [];

  constructor(private formBuilder: FormBuilder,
              public bsModalRef: BsModalRef,
              private weatherService: WeatherService) {
  }

  ngOnInit() {
    this.loadListFromBackend(this.stringLocation);
    this.form = this.formBuilder.group({
      nombre: null
    });
  }

  onCancelar() {
    if (this.callbacks.cancelar) {
      this.callbacks.cancelar();
    } else {
      this.bsModalRef.hide();
    }
  }

  private loadListFromBackend(stringLocation: string) {
    this.weatherService.listTimeStampEstadoTiempoByLocation(stringLocation).subscribe(value => {
      this.dates = value;
      console.log(value);
    });
  }



  onChange(value: any) {
    this.weatherService.getEstadoTiempo(this.stringLocation, value).subscribe(estadoTiempo => {
      this.estadoTiempo = estadoTiempo;
    });
  }
}

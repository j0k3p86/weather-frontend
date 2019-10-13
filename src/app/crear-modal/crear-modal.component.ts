import {ChangeDetectorRef, Component, Input, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {BsModalRef} from 'ngx-bootstrap';

@Component({
  selector: 'app-crear-modal',
  templateUrl: './crear-modal.component.html',
})

export class CrearModalComponent implements OnInit {

  callbacks;
  nuevoString: string;
  form: FormGroup;


  @Input() invalid;


  constructor(private formBuilder: FormBuilder,
              public bsModalRef: BsModalRef) {
  }

  ngOnInit() {
    this.form = this.formBuilder.group({
      nombre: null
    });

  }


  onAceptar() {
    if (this.form.valid) {
      if (this.callbacks.aceptar) {
        this.callbacks.aceptar(this.form.getRawValue().nombre);
        this.bsModalRef.hide();
      }
    }
  }

  onCancelar() {
    if (this.callbacks.cancelar) {
      this.callbacks.cancelar();
    } else {
      this.bsModalRef.hide();
    }
  }

}

import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import {AppComponent} from './app.component';
import {appRoutingModule} from './app.routing';
import {BasicAuthInterceptor, ErrorInterceptor} from './helpers';
import {HomeComponent} from './home';
import {LoginComponent} from './login';
import {BoardComponent} from '@app/board/board.component';
import {EstadoTiempoComponent} from '@app/estado-tiempo/estado-tiempo.component';
import {CrearModalComponent} from '@app/crear-modal/crear-modal.component';
import {BsModalService, ModalModule} from 'ngx-bootstrap';
import {EstadoTiempoModalComponent} from '@app/estado-tiempo-modal/estado-tiempo-modal.component';

@NgModule({
  imports: [
    ModalModule.forRoot(),
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule,
    appRoutingModule
  ],
  declarations: [
    EstadoTiempoModalComponent,
    CrearModalComponent,
    BoardComponent,
    EstadoTiempoComponent,
    AppComponent,
    HomeComponent,
    LoginComponent
  ],
  providers: [
    {provide: HTTP_INTERCEPTORS, useClass: BasicAuthInterceptor, multi: true},
    {provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true},
  ],
  entryComponents: [
    CrearModalComponent,
    EstadoTiempoModalComponent
  ],

  bootstrap: [AppComponent]
})
export class AppModule {
}

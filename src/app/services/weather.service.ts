import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import {Observable} from 'rxjs';
import {BoardDto} from '@app/models/board-dto';
import {Board} from '@app/models/board';
import {environment} from '@environments/environment';
import {EstadoTiempo} from '@app/models/estado-tiempo';


@Injectable({
  providedIn: 'root'
})


export class WeatherService {

  // private url = 'http://localhost:8080';
  private url = `${environment.apiUrl}`;

  constructor(private http: HttpClient) {
  }


  createBoard(nombreBoard: string): Observable<Board> {
    // let httpParams = new HttpParams();
    // httpParams = httpParams.append('nombreBoard', nombreBoard);
    return this.http.post<Board>(this.url + '/board', nombreBoard, {headers: this.getHeaders()});
  }

  removeBoard(nombreBoard: string) {
    let httpParams = new HttpParams();
    httpParams = httpParams.append('nombreBoard', nombreBoard);
    return this.http.delete(this.url + '/board', {headers: this.getHeaders(), params: httpParams});
  }


  findBoardDtoById(id: number): Observable<BoardDto> {
    return this.http.get<BoardDto>(this.url + '/board-dto/' + id);
  }

  listBoardByUsuariId(): Observable<Board[]> {
    return this.http.get<Board[]>(this.url + '/board-list', {headers: this.getHeaders()});
  }

  findBoardDtoByNombre(nombre: string): Observable<BoardDto> {
    return this.http.get<BoardDto>(this.url + '/board-dto-nombre/' + nombre, {headers: this.getHeaders()});
  }

  agregarLocation(nombre: string, location: string): Observable<Board> {
    let httpParams = new HttpParams();
    httpParams = httpParams.append('nombre', nombre);
    httpParams = httpParams.append('location', location);
    return this.http.get<Board>(this.url + '/agregar-location', {params: httpParams, headers: this.getHeaders()});
  }

  removeLocation(nombre: string, location: string) {
    let httpParams = new HttpParams();
    httpParams = httpParams.append('nombre', nombre);
    httpParams = httpParams.append('location', location);
    return this.http.delete(this.url + '/remove-location', {params: httpParams, headers: this.getHeaders()});
  }

  findBoardByUserId(id: number): Observable<BoardDto> {
    return this.http.get<BoardDto>(this.url + '/board-dto/' + id);
  }


  getHeaders() {
    let httpHeaders = new HttpHeaders();
    const idUsuario = JSON.parse(localStorage.getItem('currentUser')).id;
    httpHeaders = httpHeaders.append('idUsuario', idUsuario.toString());
    return httpHeaders;
  }


  getEstadoTiempo(nombreLocation: string, timeStamp: string): Observable<EstadoTiempo> {
    let httpParams = new HttpParams();
    httpParams = httpParams.append('nombreLocation', nombreLocation);
    httpParams = httpParams.append('timeStamp', timeStamp);
    return this.http.get<EstadoTiempo>(this.url + '/estado-tiempo', {params: httpParams});
  }


  listTimeStampEstadoTiempoByLocation(nombreLocation: string): Observable<Date[]> {
    let httpParams = new HttpParams();
    httpParams = httpParams.append('nombreLocation', nombreLocation);
    return this.http.get<Date[]>(this.url + '/estado-tiempo-list', {params: httpParams});
  }


}


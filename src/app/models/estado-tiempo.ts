import {AbstractEntity} from "./abstract.entity";

export class EstadoTiempo extends AbstractEntity {

  timeStamp: Date;
  stringLocation: string;
  woeid: number;
  city: string;
  region: string;
  country: string;
  latitude: number;
  longitude: number;
  // tslint:disable-next-line:variable-name
  timezone_id: string;
  //    current_observation
  chill: number;
  direction: number;
  speed: number;
  //    atmosphere
  humidity: number;
  visibility: number;
  pressure: number;
  rising: number;
  //    astronomy
  sunrise: string;
  sunset: string;
  //    condition
  text: string;
  code: number;
  temperature: number;
  //    pubDate
  pubDate: number;


}

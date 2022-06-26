import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Weather } from '../interfaces/weather.interface';
import { WeatherFiveDays } from '../interfaces/weatherFiveDays.interface';

@Injectable({
  providedIn: 'root'
})
export class TiempoService {

  private apiUrl: string = 'https://api.openweathermap.org/data/2.5/weather?';
  private apiUrl2: string = 'https://api.openweathermap.org/data/2.5/forecast?';
  private apiUrlMap: string = 'https://tile.openweathermap.org/map';
  private apiKey: string = 'e4071b3178b3c530924eb3f880ac1f3f';
  public resultado: Weather;
  public resultadoFiveDays: WeatherFiveDays;

  constructor(private http: HttpClient) {
    if(!localStorage.getItem('resultado')){
      this.buscarPorCiudad('palma')
      this.tiempoCincoDias('palma')
    }
    this.resultado = JSON.parse(localStorage.getItem('resultado')!) || {};
    this.resultadoFiveDays = JSON.parse(localStorage.getItem('resultadoFiveDays')!) || {};
   }

  buscarPorCoordenadas(lat:number, lon:number): Observable<Weather>{
    const url = `${this.apiUrl}lat=${lat}&lon=${lon}&appid=${this.apiKey}`
    return this.http.get<Weather>(url)
  }

  buscarPorCiudad(ciudad:string){
    const url = `${this.apiUrl}q=${ciudad}&lang=es&units=metric&appid=${this.apiKey}`
    this.http.get<Weather>(url)
      .subscribe( (resp) => {
        this.resultado = resp
        localStorage.setItem('resultado',JSON.stringify(this.resultado))
      })
  }

  tiempoCincoDias(ciudad:string){
    const url = `${this.apiUrl2}q=${ciudad}&lang=es&units=metric&appid=${this.apiKey}`
    this.http.get<WeatherFiveDays>(url)
      .subscribe( (resp) => {
        this.resultadoFiveDays = resp
        localStorage.setItem('resultadoFiveDays',JSON.stringify(this.resultadoFiveDays))
      })
  }
}

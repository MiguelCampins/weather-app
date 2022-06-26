import { Component, Input, OnInit } from '@angular/core';
import { WeatherFiveDays } from '../../interfaces/weatherFiveDays.interface';

@Component({
  selector: 'app-targeta-por-horas',
  templateUrl: './targeta-por-horas.component.html',
  styleUrls: ['./targeta-por-horas.component.css']
})
export class TargetaPorHorasComponent implements OnInit {

  @Input()weather!:WeatherFiveDays;

  constructor() { }

  ngOnInit(): void {
  }

  formatoFecha(num:number){
    let dias: string[] = ['Domingo','Lunes','Martes','Miercoles','Jueves','Viernes','Sabado']
    let fecha = new Date(num * 1000)
    return dias[fecha.getDay()] + ', ' + fecha.getHours() + ':' + fecha.getMinutes() + '0h'
  }

  getHora(){
    let horaActual = new Date();
    let hora = horaActual.getHours();
    let min = horaActual.getMinutes();
    return `${hora}:${min}h`
  }
}

import { Component, Input, OnInit } from '@angular/core';
import { WeatherDay } from '../../interfaces/weatherDay.interface';
import { WeatherFiveDays, Rain } from '../../interfaces/weatherFiveDays.interface';

@Component({
  selector: 'app-targeta-por-dias',
  templateUrl: './targeta-por-dias.component.html',
  styleUrls: ['./targeta-por-dias.component.css']
})
export class TargetaPorDiasComponent implements OnInit {

  @Input() weather!: WeatherFiveDays;

  dias: string[] = ['Domingo','Lunes','Martes','Miercoles','Jueves','Viernes','Sabado']
  pronostico: WeatherDay[] = [];

  constructor() {
  }

  ngOnInit(): void {
    this.diaSemana() 
  }

  diaSemana(){
    for (let i = 0; i < this.weather.list.length; i+=8) {
      const temp = this.weather.list[i]
      this.pronostico.push(temp)
    }
    console.log(this.pronostico)
  }

  formatoFecha(num:number){
    let fecha = new Date(num * 1000)
    return this.dias[fecha.getDay()]
  }
}

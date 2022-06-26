import { Component, Input, OnInit } from '@angular/core';
import { Weather } from '../../interfaces/weather.interface';

@Component({
  selector: 'app-targeta-tiempo',
  templateUrl: './targeta-tiempo.component.html',
  styleUrls: ['./targeta-tiempo.component.css']
})
export class TargetaTiempoComponent implements OnInit{

  @Input() weather!: Weather;
  
  dia:boolean = true;

  ngOnInit(): void {
    this.getHora()
    this.getDia()
  }

  getHora(){
    let horaActual = new Date();
    let hora = horaActual.getHours();
    let min = horaActual.getMinutes();
    return `${hora}:${min}h`
  }

  getDia(){
    let hora = new Date().getHours()
    if(hora >= 21 || hora <= 6){
      this.dia = false
    }else{
      this.dia = true
    }
  }
}

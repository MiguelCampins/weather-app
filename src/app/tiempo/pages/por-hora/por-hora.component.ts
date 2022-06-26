import { Component, OnInit } from '@angular/core';
import { WeatherFiveDays } from '../../interfaces/weatherFiveDays.interface';
import { TiempoService } from '../../services/tiempo.service';

@Component({
  selector: 'app-por-hora',
  templateUrl: './por-hora.component.html',
  styleUrls: ['./por-hora.component.css'],
})
export class PorHoraComponent implements OnInit {
  
  weather!: WeatherFiveDays;

  constructor(
    private tiempoService: TiempoService
  ) {}

  ngOnInit(): void {
    
  }

  get resultado(){
    return this.tiempoService.resultadoFiveDays
  }

}

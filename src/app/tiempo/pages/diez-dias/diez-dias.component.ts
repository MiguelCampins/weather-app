import { Component, OnInit } from '@angular/core';
import { WeatherFiveDays } from '../../interfaces/weatherFiveDays.interface';
import { TiempoService } from '../../services/tiempo.service';

@Component({
  selector: 'app-diez-dias',
  templateUrl: './diez-dias.component.html',
  styles: [
  ]
})
export class DiezDiasComponent implements OnInit {

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

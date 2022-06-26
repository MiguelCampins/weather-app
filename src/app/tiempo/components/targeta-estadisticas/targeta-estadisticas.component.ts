import { Component, Input, OnInit } from '@angular/core';
import { Weather } from '../../interfaces/weather.interface';

@Component({
  selector: 'app-targeta-estadisticas',
  templateUrl: './targeta-estadisticas.component.html',
  styleUrls: ['./targeta-estadisticas.component.css']
})
export class TargetaEstadisticasComponent implements OnInit {

  @Input() weather!: Weather;

  constructor() { }

  ngOnInit(): void {
  }

}

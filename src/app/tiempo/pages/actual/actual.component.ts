import { Component, OnInit } from '@angular/core';
import { Weather } from '../../interfaces/weather.interface';
import { TiempoService } from '../../services/tiempo.service';

@Component({
  selector: 'app-actual',
  templateUrl: './actual.component.html',
  styleUrls: ['./actual.component.css'],
})
export class ActualComponent implements OnInit {

  weather!: Weather;

  constructor(private tiempoService: TiempoService) {
  }

  ngOnInit(): void {
    
  }

  get resultado(){
    return this.tiempoService.resultado
  }
  
}

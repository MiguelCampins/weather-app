import { Component, OnInit } from '@angular/core';
import { TiempoService } from '../../services/tiempo.service';

@Component({
  selector: 'app-targeta-radar',
  templateUrl: './targeta-radar.component.html',
  styleUrls: ['./targeta-radar.component.css']
})
export class TargetaRadarComponent implements OnInit {

  map: any;

  constructor(private tiempoService: TiempoService) { } 

  ngOnInit(): void {
   
  }
}

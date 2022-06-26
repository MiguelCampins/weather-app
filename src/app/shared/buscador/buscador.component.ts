import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { TiempoService } from 'src/app/tiempo/services/tiempo.service';

@Component({
  selector: 'app-buscador',
  templateUrl: './buscador.component.html',
  styleUrls: ['./buscador.component.css']
})
export class BuscadorComponent implements OnInit {

  @ViewChild('valorCiudad') txtBuscar!: ElementRef <HTMLInputElement>;

  constructor(private tiempoService: TiempoService) { }

  ngOnInit(): void {
  }

  valor: string = '';

  buscarCiudad(){
    if(this.valor.trim().length === 0){
      return
    }
    this.tiempoService.buscarPorCiudad( this.valor );
    this.tiempoService.tiempoCincoDias( this.valor)
    this.txtBuscar.nativeElement.value = '';
  }
}

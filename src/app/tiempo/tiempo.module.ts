import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ActualComponent } from './pages/actual/actual.component';
import { PorHoraComponent } from './pages/por-hora/por-hora.component';
import { DiezDiasComponent } from './pages/diez-dias/diez-dias.component';
import { TargetaTiempoComponent } from './components/targeta-tiempo/targeta-tiempo.component';
import { TargetaEstadisticasComponent } from './components/targeta-estadisticas/targeta-estadisticas.component';
import { TargetaRadarComponent } from './components/targeta-radar/targeta-radar.component';
import { TargetaPorHorasComponent } from './components/targeta-por-horas/targeta-por-horas.component';
import { TargetaPorDiasComponent } from './components/targeta-por-dias/targeta-por-dias.component';



@NgModule({
  declarations: [
    ActualComponent,
    PorHoraComponent,
    DiezDiasComponent,
    TargetaTiempoComponent,
    TargetaEstadisticasComponent,
    TargetaRadarComponent,
    TargetaPorHorasComponent,
    TargetaPorDiasComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule
  ],
  exports: [
    ActualComponent,
    PorHoraComponent,
    DiezDiasComponent,
  ],
  providers: [
  ]
})
export class TiempoModule { }

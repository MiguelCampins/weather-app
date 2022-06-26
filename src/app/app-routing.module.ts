import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ActualComponent } from './tiempo/pages/actual/actual.component';
import { DiezDiasComponent } from './tiempo/pages/diez-dias/diez-dias.component';
import { PorHoraComponent } from './tiempo/pages/por-hora/por-hora.component';

const routes: Routes = [
  {
    path:'actual',
    component: ActualComponent
  },
  {
    path:'diez-dias',
    component: DiezDiasComponent
  },
  {
    path:'hora',
    component: PorHoraComponent
  },
  {
    path:'**',
    redirectTo: 'actual'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponent } from './menu/menu.component';
import { AppRoutingModule } from '../app-routing.module';
import { FormsModule } from '@angular/forms';
import { BuscadorComponent } from './buscador/buscador.component';



@NgModule({
  declarations: [
    MenuComponent,
    BuscadorComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    FormsModule
  ],
  exports: [
    MenuComponent,
    BuscadorComponent
  ]
})
export class SharedModule { }

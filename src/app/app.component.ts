import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  title = 'weather-app';
  dia:boolean = true;

  ngOnInit(): void {
    this.getDia()
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

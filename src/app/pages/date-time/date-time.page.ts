import { asNativeElements, Component, OnInit, ViewChild } from '@angular/core';


@Component({
  selector: 'app-date-time',
  templateUrl: './date-time.page.html',
  styleUrls: ['./date-time.page.scss'],
})
export class DateTimePage implements OnInit {


  fechaNacimiemto: Date = new Date();
  

  constructor() {  }

  ngOnInit() {
    console.log( this.fechaNacimiemto.toISOString());
  }


  obtenerFecha( fecha ){
    console.log( fecha.detail.value );
  }


}

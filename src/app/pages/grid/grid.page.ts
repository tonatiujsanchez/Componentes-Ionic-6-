import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.page.html',
  styleUrls: ['./grid.page.scss'],
})
export class GridPage implements OnInit {

  numeroColumnas:number = 12;

  constructor() { }

  ngOnInit() {
  }

  cambiarColumnas(){

    switch (this.numeroColumnas) {
      case 12:
        this.numeroColumnas = 6;
        break;
      case 6:
        this.numeroColumnas = 4;
        break;
      default:
        this.numeroColumnas = 12
        break;
    }
  }

}

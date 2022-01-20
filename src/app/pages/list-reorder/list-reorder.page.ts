import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-reorder',
  templateUrl: './list-reorder.page.html',
  styleUrls: ['./list-reorder.page.scss'],
})
export class ListReorderPage implements OnInit {

  heroes: string[] = [ 'Aquaman', 'Superman', 'Batman', 'Mujer Maravilla', 'Flash', 'Green Arrow', 'Linterna Verde', 'Shazam', 'Cyborg' ];
  disabledReorder: boolean = true;

  constructor() { }

  ngOnInit() {
  }
  doReorder( $event ){

    const itemMove = this.heroes.splice( $event.detail.from, 1 )[0];  //Eliminamos el elementos del Array y lo almacenamos
    this.heroes.splice( $event.detail.to, 0, itemMove );              //Insertamos el elemento en el Array en la nueva posisión


    $event.detail.complete();

    console.log(this.heroes);
    
  }

  toggleReorder(){
    this.disabledReorder = !this.disabledReorder;
  }
}

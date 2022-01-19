import { Component, OnInit, ViewChild } from '@angular/core';
import { IonInfiniteScroll } from '@ionic/angular';

@Component({
  selector: 'app-infinite-scroll',
  templateUrl: './infinite-scroll.page.html',
  styleUrls: ['./infinite-scroll.page.scss'],
})
export class InfiniteScrollPage implements OnInit {

  @ViewChild( IonInfiniteScroll ) infiniteScroll: IonInfiniteScroll;

  data: any[] = Array(20);

  peticiones = 0;

  constructor() { }

  ngOnInit() {
  }

  loadData( event ){
    

    setTimeout(() => {

      const newArr = Array(10);
      this.data.push( ...newArr );

      // event.target.complete();     //opcion 1
      this.infiniteScroll.complete(); //opcion 2

      this.peticiones++;
      console.log( this.peticiones );
      

      if( this.peticiones >= 5 ){
        // event.target.disabled = true;     //opcion 1
        this.infiniteScroll.disabled = true; //opcion 2
      }
      
    }, 1000);

    

  }
}

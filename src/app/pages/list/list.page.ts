import { Component, OnInit, ViewChild } from '@angular/core';
import { IonList } from '@ionic/angular';
import { Observable } from 'rxjs';
import { JsonplaceholderService } from '../../services/jsonplaceholder.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.page.html',
  styleUrls: ['./list.page.scss'],
})
export class ListPage implements OnInit {

  users: Observable<any>;
  @ViewChild(IonList) ionList: IonList;

  constructor( private _placeholder: JsonplaceholderService ) { }

  ngOnInit() {
    this.users = this._placeholder.getUsers();
  }


  fovorite( user ){
    console.log('Agregado a fovoritos!...');
    console.log(user);
    
    this.ionList.closeSlidingItems();
    
  }
  share( user ){
    console.log('Compartiendo...');
    console.log(user);
    this.ionList.closeSlidingItems();

  }

  delete( user ){
    console.log('Eliminando...');
    console.log(user);
    this.ionList.closeSlidingItems();
    
  }
}

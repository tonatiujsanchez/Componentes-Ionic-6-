import { Component, OnInit } from '@angular/core';
import { JsonplaceholderService } from '../../services/jsonplaceholder.service';
import { Album } from '../../interfaces/album.interface';

@Component({
  selector: 'app-search',
  templateUrl: './search.page.html',
  styleUrls: ['./search.page.scss'],
})
export class SearchPage implements OnInit {


  albums: Album[] = [];
  termino: string = '';
  constructor( private placeholderSvc: JsonplaceholderService ) { }

  ngOnInit() {
     this.placeholderSvc.getAlbums().subscribe(
       (data) => {
          this.albums = data
       }
     );
  }

  onSearchChange(event){
    console.log( event.detail.value );
    this.termino = event.detail.value;
  }

}

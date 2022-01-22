import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Album } from '../interfaces/album.interface';

@Injectable({
  providedIn: 'root'
})
export class JsonplaceholderService {

  constructor( private http: HttpClient ) { }



  getUsers(){
    return this.http.get('https://jsonplaceholder.typicode.com/users');
  }

  getAlbums(){
    return this.http.get<Album[]>('https://jsonplaceholder.typicode.com/albums');
  }
}

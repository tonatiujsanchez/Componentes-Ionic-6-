import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Hero } from '../interfaces/hero.interface';
import { delay } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class HeroesService {

  constructor( private http: HttpClient ) { }


  getHeroes(){
    return this.http.get<Hero[]>('/assets/data/superheroes.json')
      .pipe(
        delay(2500)
      )
  }

}

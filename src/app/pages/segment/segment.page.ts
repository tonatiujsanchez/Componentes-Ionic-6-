import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Hero } from '../../interfaces/hero.interface';
import { HeroesService } from '../../services/heroes.service';

@Component({
  selector: 'app-segment',
  templateUrl: './segment.page.html',
  styleUrls: ['./segment.page.scss'],
})
export class SegmentPage implements OnInit {

  heroes: Observable<Hero[]>;
  termino: string = '';

  constructor( private heroesSvc: HeroesService ) { }

  ngOnInit() {
    this.heroes = this.heroesSvc.getHeroes();
  }

  segmentChanged( event ){
    if( event.detail.value === 'Todos' ){
      this.termino = '';
    }else{
      this.termino = event.detail.value;
    }
  }

}

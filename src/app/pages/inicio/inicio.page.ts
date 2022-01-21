import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { Observable } from 'rxjs';
import { Componente } from '../../interfaces/componente.interface';
import { DataService } from '../../services/data.service';



@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {


  componentes: Observable<Componente[]>;

  constructor( 
      private menu: MenuController,
      private dataSvc: DataService
      ) { }

  ngOnInit() {
     this.componentes = this.dataSvc.getMenuOpts();
  }

  toggleMenu(){
    this.menu.open('first');
  }

}

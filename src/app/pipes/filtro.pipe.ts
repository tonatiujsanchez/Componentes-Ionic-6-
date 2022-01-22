import { Pipe, PipeTransform } from '@angular/core';
import { Album } from '../interfaces/album.interface';

@Pipe({
  name: 'filtro'
})
export class FiltroPipe implements PipeTransform {

  transform( arreglo: any[],  texto:string= '', columna: string = '' ): any[] {
      
    let arrayTemp:any[] = [];
  
    if( texto !== '' ) {
      
      arrayTemp = arreglo.filter( 
          item => (item[columna].toLocaleLowerCase()).includes( texto.toLocaleLowerCase() ) 
      );

      return arrayTemp;
    }else{

      return arreglo;
    }
  }

}

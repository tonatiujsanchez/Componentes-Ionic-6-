import { Pipe, PipeTransform } from '@angular/core';
import { Album } from '../interfaces/album.interface';

@Pipe({
  name: 'filtro'
})
export class FiltroPipe implements PipeTransform {

  transform( arreglo: Album[],  texto:string= '', columna: string = '' ): Album[] {
    
    let arrayTemp:Album[] = [];
  
    if( arreglo.length !== 0 && texto !== '' ) {

      arrayTemp = arreglo.filter( 
          item => item[columna].toLocaleLowerCase().includes( texto.toLocaleLowerCase() ) 
      );

      return arrayTemp;
    }else{

      return arreglo;
    }
  }

}

import { Pipe, PipeTransform } from '@angular/core';
import { Heroe } from '../interfaces/heroes.interface';

@Pipe({
  name: 'imagen'
  // pure: false --> Se dispara por cada vez q se actualiza cualquier campo 
})
export class ImagenPipe implements PipeTransform {

  transform(heroe: Heroe): string {

    if(! heroe.id && !heroe.alt_img ) {
      return 'assets/no-image.png';
    } else if ( heroe.alt_img ){
      return heroe.alt_img
    } else {
      return `assets/heroes/${ heroe.id }.jpg`
    }    
  }

}

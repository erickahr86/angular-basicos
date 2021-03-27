import { Component} from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html'
})
export class ListadoComponent 
{

  heroes        : string[] = ['Spiderman', 'Ironman', 'Hulk', 'Thor', 'Capitán América'];
  heroesBorrados: string[] = [];

  borrarHeroe(): void
  {
    const heroeBorrado: string = this.heroes.shift()?.toString() ?? '';
    if (heroeBorrado != '')
    {
      this.heroesBorrados.push( heroeBorrado );
    }
  }


}

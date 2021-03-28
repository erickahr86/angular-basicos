import { Component, Input } from '@angular/core';
import { Personaje } from '../../interfaces/dbz.interface';
import { DbzService } from '../../services/dbz.service';


@Component({
  selector: 'app-personajes',
  templateUrl: './listado-personajes.component.html'
})
export class PersonajesComponent 
{
  //@Input('data') personajes: Personaje [] = [];

  get personajes(): Personaje []
  {
    return this.dbzService.personajes;
  }

  constructor( private dbzService: DbzService )
  {

  }

}

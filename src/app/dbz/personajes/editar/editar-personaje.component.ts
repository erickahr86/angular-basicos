import { EventEmitter } from '@angular/core';
import { Component, Input, Output } from '@angular/core';
import { Personaje } from '../../interfaces/dbz.interface';
import { DbzService } from '../../services/dbz.service';

@Component({
  selector: 'app-editar-personaje',
  templateUrl: './editar-personaje.component.html',
})

export class EditarPersonajeComponent  
{
  
  @Input('nuevo') nuevo : Personaje = 
  {
    nombre: '',
    poder : 0
  };

  constructor( private dbzService: DbzService ){}

  //@Output() onNuevoPersonaje : EventEmitter<Personaje> = new EventEmitter<Personaje>();

  agregar(): void 
  {
    if (this.nuevo.nombre.trim().length === 0)
    {
      return;
    }

    //this.onNuevoPersonaje.emit( this.nuevo );

    this.dbzService.agregarPersonaje( this.nuevo );

    this.nuevo = {
      nombre: '',
      poder : 0
    }

    console.log( this.nuevo );
  }

}

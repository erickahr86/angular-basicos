import { Injectable } from "@angular/core";
import { Personaje } from '../interfaces/dbz.interface';

@Injectable()
export class DbzService
{

    private _personajes: Personaje [] = [
        {
          nombre: 'Goku',
          poder: 15000
        },
        {
          nombre: 'Vegetta',
          poder: 8500
        }
      ];
      

    get personajes(): Personaje[]
    {
        return [...this._personajes]; // representa un spread [...] para que el objeto no pase por referencia
    }  

    constructor() {}

    agregarPersonaje( personaje: Personaje )
    {
        this._personajes.push( personaje );
    }


}
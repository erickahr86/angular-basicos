import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainPageComponent } from './main-page/main-page.component';
import { FormsModule } from '@angular/forms';
import { PersonajesComponent } from './personajes/listado/listado-personajes.component';
import { EditarPersonajeComponent } from './personajes/editar/editar-personaje.component';
import { DbzService } from './services/dbz.service';



@NgModule({
  declarations: [ 
    MainPageComponent, 
    PersonajesComponent, 
    EditarPersonajeComponent 
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    MainPageComponent,

  ],
  providers:[
    DbzService    
  ]


})
export class DbzModule { }

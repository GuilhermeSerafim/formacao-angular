import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from './button/button.component';
import { CardComponent } from './card/card.component';
import { PersonComponent } from './person/person.component';



@NgModule({
  declarations: [
    ButtonComponent,
    CardComponent,
    PersonComponent
  ],
  imports: [
    CommonModule
  ],
  // Angular @NgModule (version: <= 17)
  // Temos que exportar explicitamente para outros módulos conseguirem utilizar 
  exports:[
    CardComponent,
    ButtonComponent,
    PersonComponent
  ]

})
export class ComponentsModule { }

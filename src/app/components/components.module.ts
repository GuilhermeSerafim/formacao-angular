import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from './button/button.component';
import { CardComponent } from './card/card.component';



@NgModule({
  declarations: [
    ButtonComponent,
    CardComponent
  ],
  imports: [
    CommonModule
  ],
  // Angular @NgModule (version: <= 17)
  // Temos que exportar explicitamente para outros módulos conseguirem utilizar 
  exports:[
    CardComponent,
    ButtonComponent
  ]

})
export class ComponentsModule { }

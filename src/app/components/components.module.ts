import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AngularMaterialModule } from '../angular-material/angular-material/angular-material.module';


// Aqui vão ser os componentes da nossa aplicação
@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    AngularMaterialModule // Vamos usar os components do material na nossa aplicação
  ],
  exports:[
  ]

})
export class ComponentsModule { }

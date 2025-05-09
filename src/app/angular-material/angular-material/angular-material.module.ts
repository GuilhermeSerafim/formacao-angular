import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import {MatDividerModule} from '@angular/material/divider';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatButtonModule,
    MatIconModule,
    MatListModule,
    MatDividerModule
  ],
  exports: [
    // Exportando o módulo para ficar disponível para o App Module
    MatButtonModule,
    MatIconModule,
    MatListModule,
    MatDividerModule
  ],
})
export class AngularMaterialModule { }

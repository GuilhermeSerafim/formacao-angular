import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AngularMaterialModule } from '../angular-material/angular-material/angular-material.module';
import { UserDetailsComponent } from './user-details/user-details.component';
import { FilterComponentsComponent } from './filter-components/filter-components.component';
import { FormsModule } from '@angular/forms';
import { MatNativeDateModule } from '@angular/material/core';
import { UsersListComponent } from './users-list/users-list.component';
import { PipesModule } from '../pipes/pipes.module';


// Aqui vão ser os componentes da nossa aplicação
@NgModule({
  declarations: [
    UserDetailsComponent,
    FilterComponentsComponent,
    UsersListComponent,
  ],
  imports: [
    CommonModule,
    AngularMaterialModule, // Vamos usar os components do material na nossa aplicação
    FormsModule,
    MatNativeDateModule, // Com isso o Angular automaticamente registra um NativeDateAdapter que satisfaz o token DateAdapter e o datepicker volta a funcionar.
    PipesModule,
  ],
  exports: [
    UserDetailsComponent,
    FilterComponentsComponent,
    UsersListComponent,
  ]

})
export class ComponentsModule { }

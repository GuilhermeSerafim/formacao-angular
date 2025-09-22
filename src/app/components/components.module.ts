import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { UsersCardListComponent } from './users-card-list/users-card-list.component';
import { DirectivesModule } from '../directives/directives.module';
import { UserFormComponent } from './user-form/user-form.component';
import { AngularMaterialModule } from '../angular-material/angular-material.module';
import { UserBeforeAndAfterDialogComponent } from './user-before-and-after-dialog/user-before-and-after-dialog.component';


// declarations → coisas que pertencem ao módulo (componentes, pipes, diretivas).
// imports → módulos externos que você precisa usar aqui.
// exports → coisas desse módulo que você quer disponibilizar para outros.
@NgModule({
  declarations: [UsersCardListComponent, UserFormComponent, UserBeforeAndAfterDialogComponent],
  imports: [CommonModule, FormsModule, AngularMaterialModule, DirectivesModule],
  // Para usarmos no APPMODULE, temos que exportar...
  exports: [UsersCardListComponent, UserFormComponent],
})
export class ComponentsModule {}

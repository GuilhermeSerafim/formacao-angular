import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AngularMaterialModule } from '../../angular-material/angular-material.module';
import { DirectivesModule } from '../../directives/directives/directives.module';
import { UsersCardListComponent } from '../users-card-list/users-card-list.component';

// declarations → coisas que pertencem ao módulo (componentes, pipes, diretivas).
// imports → módulos externos que você precisa usar aqui.
// exports → coisas desse módulo que você quer disponibilizar para outros.
@NgModule({
  declarations: [UsersCardListComponent],
  imports: [CommonModule, FormsModule, AngularMaterialModule, DirectivesModule],
  exports: [UsersCardListComponent],
})
export class ComponentsModule {}

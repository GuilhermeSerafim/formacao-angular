import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IUser } from '../../interfaces/user/user.interface';
import { UsersList } from '../../data/users-list';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrl: './users-list.component.scss'
})
export class UsersListComponent {
  @Output('userSelected') userSelectedEmmit = new EventEmitter<IUser>();
  // Não é uma boa prática realizar chamadas HTTP no componente filho
  @Input({ required: true }) usersList: IUser[] = [];
  displayedColumns: string[] = ['name', 'registrationDate', 'status'];
  onUserSelected(user: IUser) {
    this.userSelectedEmmit.emit(user);
  }
}

import { Component } from '@angular/core';
import { IUser } from '../../interfaces/user/user.interface';
import { UsersList } from '../../data/users-list';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrl: './users-list.component.scss'
})
export class UsersListComponent {
  onUserSelected(user: IUser) {
    console.log(user);
  }
  displayedColumns: string[] = ['name', 'registrationDate', 'status'];
  usersList: IUser[] = UsersList;
}

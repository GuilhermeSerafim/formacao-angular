import { Component } from '@angular/core';
import { UsersList } from './data/users-list';
import { IUser } from './interfaces/user/user.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'prj-angular';
  userSelected: IUser = {} as IUser;
  showUserDetails: boolean = false;
  onUserSelected(user: IUser) {
    this.userSelected = user;
    this.showUserDetails = true;
  }
}



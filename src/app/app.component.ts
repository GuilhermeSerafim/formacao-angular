import { Component, OnInit } from '@angular/core';
import { UsersList } from './data/users-list';
import { IUser } from './interfaces/user/user.interface';
import { IFilterOptions } from './interfaces/filter-options';
import { isWithinInterval } from 'date-fns';
import filterUsersList from './utils/filter-users-list';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  title = 'prj-angular';
  userSelected: IUser = {} as IUser;
  showUserDetails: boolean = false;

  // Separando lista filtrada da lista original
  usersList: IUser[] = [];
  usersListFiltered: IUser[] = [];

  ngOnInit() {
    // Simulando chamada HTTP (async - life cycle component)
    setTimeout(() => {
      this.usersList = UsersList;
      this.usersListFiltered = UsersList;
    }, 1);
  }

  onUserSelected(user: IUser) {
    this.userSelected = user;
    this.showUserDetails = true;
  }

  onFilter(filterOptions: IFilterOptions) {
    this.usersListFiltered = filterUsersList(filterOptions, this.usersList);
  }
}



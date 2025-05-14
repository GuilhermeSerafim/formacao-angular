import { Component, OnInit } from '@angular/core';
import { UsersList } from './data/users-list';
import { IUser } from './interfaces/user/user.interface';
import { IFilterOptions } from './interfaces/filter-options';

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
    this.usersListFiltered = this.filterUsersList(filterOptions, this.usersList);
  }

  // Pure Functional Programming
  filterUsersList(filterOptions: IFilterOptions, usersList: IUser[]): IUser[] {
    let filteredList: IUser[] = [];

    // Boa prática - É melhor pegarmos o parametro do que puxar mais uma vez a varíavel externa
    filteredList = this.filteredUsersListByName(filterOptions.name, usersList);
    // Construindo cascata
    filteredList = this.filteredUsersListByStatus(filterOptions.status, filteredList);

    return filteredList;
  }

  filteredUsersListByName(name: string | undefined, usersList: IUser[]): IUser[] {
    const NAME_NOT_TYPPED = name === undefined;

    if (NAME_NOT_TYPPED) return usersList;

    return usersList.filter((user) => user.name.toLowerCase().includes(name.toLocaleLowerCase()));
  }

  filteredUsersListByStatus(status: boolean | undefined, usersList: IUser[]): IUser[] {
    const STATUS_NOT_TYPPED = status === undefined;

    if (STATUS_NOT_TYPPED) return usersList;

    return usersList.filter((user) => user.isActive === status);
  }
}



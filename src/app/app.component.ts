import { Component, OnInit } from '@angular/core';
import { UsersList } from './data/users-list';
import { IUser } from './interfaces/user/user.interface';
import { IFilterOptions } from './interfaces/filter-options';
import { isWithinInterval } from 'date-fns';

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
    filteredList = this.filterUsersListByDate(filterOptions.startDate, filterOptions.endDate, filteredList);

    return filteredList;
  }

  filteredUsersListByName(name: string | undefined, usersList: IUser[]): IUser[] {
    const NAME_NOT_TYPPED = name === undefined;

    if (NAME_NOT_TYPPED) return usersList;

    return usersList.filter((user) => user.name.toLowerCase().includes(name.toLocaleLowerCase()));
  }

  filteredUsersListByStatus(status: boolean | undefined, usersList: IUser[]): IUser[] {
    const STATUS_NOT_SELECTED = status === undefined;

    if (STATUS_NOT_SELECTED) return usersList;

    return usersList.filter((user) => user.isActive === status);
  }

  // Estamos chamando de userList o 3ª parametro, pois não importa para a função se está filtrada ou não 🤷‍♀️
  filterUsersListByDate(startDate: Date | undefined, endDate: Date | undefined, userList: IUser[]): IUser[] {
    const DATES_NOT_SELECTED = startDate === undefined || endDate === undefined;

    if (DATES_NOT_SELECTED) return userList;

    return userList.filter((user) => isWithinInterval(new Date(user.registrationDate), {
      start: startDate, // Include
      end: endDate // Exclude
    }));
  }
}



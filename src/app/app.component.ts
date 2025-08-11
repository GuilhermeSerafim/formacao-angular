import { Component, OnInit } from '@angular/core';
import { UsersService } from './services/users.service';
import { IUserPromisse } from './interfaces/user-promisse';
import { lastValueFrom, Observable } from 'rxjs';
import { UsersListResponse } from './types/user-list-response.type';
import { IUser } from './interfaces/user';

export enum UserStatusEnum {
  ATIVO = 1,
  INATIVO = 2,
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  users: IUser[] = [];
  filtro: string = '';
  constructor(private readonly _userService: UsersService) {}
  ngOnInit(): void {
    this._userService
      .getAllUsers()
      .subscribe((usersResponse) => (this.users = usersResponse));
  }
}

import { Component, OnInit } from '@angular/core';
import { UsersService } from './services/users.service';
import { IUserPromisse } from './interfaces/user-promisse';
import { lastValueFrom } from 'rxjs';
import { UsersListResponse } from './types/user-list-response.type';

export enum UserStatusEnum {
  ATIVO = 1,
  INATIVO = 2,
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  users = [
    {
      name: 'Felipe',
      status: 1,
    },
    {
      name: 'Laura',
      status: 2,
    },
    {
      name: 'João',
      status: 1,
    },
    {
      name: 'Maria',
      status: 2,
    },
  ];

  inactiveUser(userIndex: number) {
    this.users[userIndex].status = 2;
  }

  addUser() {
    this.users.push({
      name: 'Marcos',
      status: 1,
    });
  }

  // Dá pra fazer com função, mas ela chama toda vez que o componente muda (como um pipe impuro), o que diminui drasticamente a perfomance da aplicação
  getUserStatus(userStatus: number): string {
    console.log('getUserStatus');
    const status: {[key:string]: string} = {
      1: 'Ativo',
      2: 'Inativo'
    };

    return status[userStatus];
  }
}

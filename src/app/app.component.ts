import { Component, OnInit } from '@angular/core';
import { UsersService } from './services/users.service';
import { IUserPromisse } from './interfaces/user-promisse';

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
  userPromisse!: Promise<IUserPromisse>;

  constructor(private readonly _usersServices: UsersService) {}

  ngOnInit(): void {
    // Alocando a referencia de promisse
    this.userPromisse = this._usersServices.getUserPromisse();

    this._usersServices.getUserPromisse().then((data) => console.log(data));
  }
}

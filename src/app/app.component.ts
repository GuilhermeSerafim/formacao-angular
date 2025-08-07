import { Component, OnInit } from '@angular/core';
import { UsersService } from './services/users.service';
import { IUserPromisse } from './interfaces/user-promisse';
import { lastValueFrom } from 'rxjs';

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
  userPromise!: Promise<IUserPromisse>;
  userByIdPromise!: Promise<IUserPromisse>;
  constructor(private readonly _usersServices: UsersService) {}

  ngOnInit(): void {
    this.userPromise = this._usersServices.getUserPromisse();

    // Convertendo Observable para Promisse | Mais em: https://rxjs.dev/deprecations/to-promise
    // lastValueFrom -> Pega o último valor emitido de um Observable, ao contrário de firstValueFrom
    this.userByIdPromise = lastValueFrom(
      this._usersServices.getUserByIdPromisse(2)
    );
  }
}

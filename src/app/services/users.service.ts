import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IUserResponse } from '../interfaces/user-response';
import { UsersListResponse } from '../types/user-list-response.type';
import { IUserPromisse } from '../interfaces/user-promisse';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  url = 'https://jsonplaceholder.typicode.com/users/';

  constructor(private readonly _http: HttpClient) {}

  getUserById(userId: number): Observable<IUserResponse> {
    return this._http.get<IUserResponse>(this.url + userId);
  }

  getUsers(): Observable<UsersListResponse> {
    return this._http.get<UsersListResponse>(this.url);
  }

  getUserPromisse(): Promise<IUserPromisse> {
    return new Promise((resolve, reject) => {
      setTimeout(
        () =>
          resolve({
            id: 1,
            name: 'Leanne Graham',
            username: 'Bret',
            email: 'Sincere@april.biz',
          }),
        3000
      );
    });
  }

  // A finalidade desse aqui, é pegando um Observable e transformando em promisse -> Casos do dia a dia
  // A promisse é chamada e acabou, já o Observable fica rodando, esperando ser desinscrito
  getUserByIdPromisse(userId: number): Observable<IUserPromisse> {
    return this._http.get<IUserPromisse>(this.url + userId);
  }


  // + OBS: A semelhança entre Observables e Promises é que ambas as coleções podem produzir valores ao longo tempo, mas a diferença é que Observables podem produzir nenhum ou mais de um valor, enquanto Promises produzem apenas um valor quando resolvido com sucesso.
}

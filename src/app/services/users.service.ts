import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IUserResponse } from '../interfaces/user-response';
import { UsersListResponse } from '../types/user-list-response.type';
import { IUserPromisse } from '../interfaces/user-promisse';
import { IUser } from '../interfaces/user';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  url = 'http://localhost:3000/users';

  constructor(private readonly _http: HttpClient) {}

  getUserById(userId: number): Observable<IUserResponse> {
    return this._http.get<IUserResponse>(this.url + userId);
  }

  getUsers(): Observable<UsersListResponse> {
    return this._http.get<UsersListResponse>(this.url);
  }

  getUserByIdPromisse(userId: number): Observable<IUserPromisse> {
    return this._http.get<IUserPromisse>(this.url + userId);
  }

  getAllUsers(): Observable<IUser[]> {
    // return this._http.get<IUser[]>(this.url);
    throw new Error('Testando erro')
  }
}

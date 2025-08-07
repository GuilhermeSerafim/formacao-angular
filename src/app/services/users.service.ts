import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IUserResponse } from '../interfaces/user-response';
import { UsersListResponse } from '../types/user-list-response.type';

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
}

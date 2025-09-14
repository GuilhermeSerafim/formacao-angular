import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

// Verificação se o user já existe através de uma chamada http pro json placeholder
@Injectable({
  providedIn: 'root',
})
export class UsersPlaceholderService {
  constructor(private readonly __httpClient: HttpClient) {}
  getUsersPlaceHolder(): Observable<any> {
    return this.__httpClient.get('https://jsonplaceholder.typicode.com/users');
  }
}

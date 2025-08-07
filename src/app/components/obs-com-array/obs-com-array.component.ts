import { Component, OnInit } from '@angular/core';
import { UsersService } from '../../services/users.service';
import { Observable } from 'rxjs';
import { UsersListResponse } from '../../types/user-list-response.type';

@Component({
  selector: 'app-obs-com-array',
  templateUrl: './obs-com-array.component.html',
  styleUrl: './obs-com-array.component.scss',
})
export class ObsComArrayComponent implements OnInit {
  users$!: Observable<UsersListResponse>;

  constructor(private readonly _usersServices: UsersService) {}

  ngOnInit(): void {
    // Referencia de Observable alocada no users$
    this.users$ = this._usersServices.getUsers();
  }
}

import { Component, OnInit } from '@angular/core';
import { UsersService } from '../../services/users.service';
import { IUserResponse } from '../../interfaces/user-response';

@Component({
  selector: 'app-obs-com-objeto',
  templateUrl: './obs-com-objeto.component.html',
  styleUrl: './obs-com-objeto.component.scss',
})
export class ObsComObjetoComponent implements OnInit {
  user: IUserResponse = {} as IUserResponse;
  constructor(private readonly _usersService: UsersService) {}
  ngOnInit(): void {
    // Observable não faz nada até alguém se inscrever nele.
    this._usersService
      .getUserById(1)
      .subscribe((userResponse) => (this.user = userResponse));
  }
}

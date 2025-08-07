import { Component, OnDestroy, OnInit } from '@angular/core';
import { UsersService } from '../../services/users.service';
import { IUserResponse } from '../../interfaces/user-response';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-obs-com-objeto',
  templateUrl: './obs-com-objeto.component.html',
  styleUrl: './obs-com-objeto.component.scss',
})
export class ObsComObjetoComponent implements OnInit, OnDestroy {
  user: IUserResponse = {} as IUserResponse;
  userSubs: Subscription | undefined;

  user$!: Observable<IUserResponse>;

  constructor(private readonly _usersService: UsersService) {}

  ngOnInit(): void {
    // Guardando a referencia na variavel do tipo Observable
    // Sempre que a referencia dessa prop mudar, o Async pipe vai fazer unsubscribe na referencia anterior e na nova, o subscribe
    this.user$ = this._usersService.getUserById(2);

    this.userSubs = this._usersService
      .getUserById(1)
      .subscribe((userResponse) => (this.user = userResponse));
  }

  ngOnDestroy(): void {
    this.userSubs && this.userSubs.unsubscribe();
  }
  onBtnClick(i: number) {
    this.user$ = this._usersService.getUserById(i);
  }
}

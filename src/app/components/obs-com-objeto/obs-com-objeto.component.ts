import { Component, OnDestroy, OnInit } from '@angular/core';
import { UsersService } from '../../services/users.service';
import { IUserResponse } from '../../interfaces/user-response';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-obs-com-objeto',
  templateUrl: './obs-com-objeto.component.html',
  styleUrl: './obs-com-objeto.component.scss',
})
export class ObsComObjetoComponent implements OnInit, OnDestroy {
  user: IUserResponse = {} as IUserResponse;
  userSubs: Subscription | undefined;
  constructor(private readonly _usersService: UsersService) {}
  ngOnInit(): void {
    // Observable não faz nada até alguém se inscrever nele. -> que fica ouvindo e respondendo a dados enquanto o Observable estiver ativo.
    // Essa assinatura retorna um objeto do tipo Subscription, que permite controlar (cancelar) essa escuta.
    this.userSubs = this._usersService
      .getUserById(1)
      .subscribe((userResponse) => (this.user = userResponse));
  }
  // Subscription -> Desinscrever do Observable
  ngOnDestroy(): void {
    this.userSubs && this.userSubs.unsubscribe();
  }

  // 🧠 Por que desinscrever (unsubscribe) é importante?
  // 🔥 1. Evitar vazamentos de memória (memory leaks)
  // 📦 2. Evita chamadas desnecessárias à API
  // 🧨 3. Pode causar múltiplos efeitos colaterais
}

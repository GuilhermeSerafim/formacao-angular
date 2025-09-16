import { Component, OnInit } from '@angular/core';
import { UsersService } from './services/users.service';
import { GenresService } from './services/genres.service';
import { BrazilianStateService } from './services/brazilian-state.service';
import { UsersPlaceholderService } from './services/users-placeholder.service';
import { UsersListResponse } from './types/users-list-response';
import { GenresListResponse } from './types/genres-list-response';
import { StateListResponse } from './types/states-list-response';
import { IUser } from './interfaces/iuser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  userSelected: IUser = {} as IUser; // Copy user selected to traceability
  userSelectedIndex: number | undefined;
  
  usersList: UsersListResponse = [];
  genresList: GenresListResponse = [];
  statesList: StateListResponse = [];
  
  constructor(
    private readonly _usersService: UsersService,
    private readonly _genresService: GenresService,
    private readonly _brazilianStatesService: BrazilianStateService,
    private readonly _usersPlaceholderService: UsersPlaceholderService
  ) {}
  
  ngOnInit(): void {
    this.getUsers();
    this.getGenres();
    this.getBrazilianState();
    this._usersPlaceholderService
    .getUsersPlaceHolder()
    .subscribe((u) => console.log(u));
  }
  
  getBrazilianState() {
    this._brazilianStatesService
    .getStates()
    .subscribe(
      (statesListResponse) => (this.statesList = statesListResponse)
    );
  }
  
  getUsers() {
    this._usersService
    .getUsers()
    .subscribe((usersListResponse) => (this.usersList = usersListResponse));
  }
  
  getGenres() {
    this._genresService
    .getGenres()
    .subscribe(
      (genresListResponse) => (this.genresList = genresListResponse)
    );
  }
  
  onUserSelected(userIndex: number) {
    const userFound = this.usersList[userIndex];
    if (userFound) {
      this.userSelectedIndex = userIndex;
      // structuredClone -> usada para criar uma cópia profunda (deep clone - clona até os filhos) de um objeto ou valor.
      // Vamos usar isso para rastreamento da propriedade original, caso o user não altere nada para n perder os dados anterior (trace)
      this.userSelected = structuredClone(userFound);
    }
  }

  showRealUser() {
    console.log(this.usersList);
  }
}

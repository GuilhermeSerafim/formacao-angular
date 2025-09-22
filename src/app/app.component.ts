import { Component, inject, OnInit } from '@angular/core';
import { UsersService } from './services/users.service';
import { GenresService } from './services/genres.service';
import { BrazilianStateService } from './services/brazilian-state.service';
import { UsersPlaceholderService } from './services/users-placeholder.service';
import { UsersListResponse } from './types/users-list-response';
import { GenresListResponse } from './types/genres-list-response';
import { StateListResponse } from './types/states-list-response';
import { IUser } from './interfaces/iuser';
import { MatDialog } from '@angular/material/dialog';
import { UserBeforeAndAfterDialogComponent } from './components/user-before-and-after-dialog/user-before-and-after-dialog.component';

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
  private dialog = inject(MatDialog);

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

  onUserSelected(userIndex: number) {
    const userFound = this.usersList[userIndex];
    if (userFound) {
      this.userSelectedIndex = userIndex;
      // Isso significa que ele copia todos os valores do objeto, incluindo objetos aninhados, etc.
      // Criando novas referências em vez de apenas apontar para os mesmos endereços de memória.
      this.userSelected = structuredClone(userFound);
    }
  }

  showRealUser() {
    console.log(this.usersList);
  }

  onFormSubmit() {
    if (this.userSelectedIndex === undefined) return;
    const original = this.usersList[this.userSelectedIndex];

    this.openBeforeAndAfterDialog(original, this.userSelected);
  }

  openBeforeAndAfterDialog(originalUser: IUser, updatedUser: IUser) {
    this.dialog.open(UserBeforeAndAfterDialogComponent, {
      // O Material joga esse objeto dentro de um injection token
      data: {
        originalUser,
        updatedUser,
      },
      minWidth: '70%',
    });
  }

  private getBrazilianState() {
    this._brazilianStatesService
      .getStates()
      .subscribe(
        (statesListResponse) => (this.statesList = statesListResponse)
      );
  }

  private getUsers() {
    this._usersService
      .getUsers()
      .subscribe((usersListResponse) => (this.usersList = usersListResponse));
  }

  private getGenres() {
    this._genresService
      .getGenres()
      .subscribe(
        (genresListResponse) => (this.genresList = genresListResponse)
      );
  }
}

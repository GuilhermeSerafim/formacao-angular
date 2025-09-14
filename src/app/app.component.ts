import { Component, OnInit } from '@angular/core';
import { UsersService } from './services/users.service';
import { GenresService } from './services/genres.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  on() {
    console.log(this.genresList);
  }
  usersList: any = [];
  genresList: any = [];

  constructor(
    private readonly _usersService: UsersService,
    private readonly _genresService: GenresService
  ) {}

  ngOnInit(): void {
    this.getUsers();
    this.getGenres();
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
}

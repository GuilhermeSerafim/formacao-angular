import { Component, OnInit } from '@angular/core';
import { UsersList } from './data/users-list';
import { IUser } from './interfaces/user/user.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  title = 'prj-angular';
  userSelected: IUser = {} as IUser;
  showUserDetails: boolean = false;

  usersList: IUser[] = [];
  
  // Assim que o comp carrega, ele é carregado
  ngOnInit() {
    // Simulando chamada HTTP (async - life cycle component)
    setTimeout(() => {
      // Pegando 'response'
      this.usersList = UsersList;
    }, 3000);  // 3 sec
  }

  onUserSelected(user: IUser) {
    this.userSelected = user;
    this.showUserDetails = true;
  }
}



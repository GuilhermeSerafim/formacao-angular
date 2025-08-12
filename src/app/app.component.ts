import { Component, OnInit } from '@angular/core';

export enum UserStatusEnum {
  ATIVO = 1,
  INATIVO = 2,
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  onChange(e: string) {
    console.log(e);
    // Manipulando `e` depois atribuindo ao binding
    this.binding = e;
  }
  binding: any;
}

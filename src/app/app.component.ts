import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'prj-angular';
  text = 'Felipe';
  obj = {
    cor: "red",
    number: 10,
    name: "Guilherme"
  }
}



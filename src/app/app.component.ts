import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'prj-angular';
  listPeople = [
    {
      name: 'Felipe Freitas',
      age: '26 anos'
    },
    {
      name: 'Jake Paul',
      age: '34 anos'
    },
    {
      name: 'Mike Tyson',
      age: '55 anos'
    },
    {
      name: 'Noir Walk',
      age: '20 anos'
    },
  ];

}

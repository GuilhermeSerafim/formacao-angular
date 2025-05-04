import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {

  title = 'prj-angular';
  personSelectedIndex: number = -1;
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

  //   Usuário clica em um item (div.item).

  // O método selectPerson() do filho é chamado.

  // Ele emite um evento (onPersonSelectEmitt) com o índice da pessoa (this.personIndex).

  // O AppComponent (pai) escuta esse evento e executa selectedPerson($event) -> por isso é um inteiro
  selectedPerson(i: number) {
    console.log(i);
    this.personSelectedIndex = i;
  }
}

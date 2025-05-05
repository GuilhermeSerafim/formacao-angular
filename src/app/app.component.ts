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

  selectedPerson(i: number) {
    this.personSelectedIndex = i;
  }

  fontSize: number = 15;
  textColor: 'purple' | 'orange' = 'purple';
  buttonText: 'Roxo' | 'Laranja' = 'Roxo'
  encriseFontSize() {
    this.fontSize += 1;
  }

  toogleFontColor() {
    if(this.textColor == "purple") {
      this.textColor = 'orange'
      this.buttonText = 'Laranja'
    } else {
      this.textColor = 'purple'
      this.buttonText = 'Roxo'
    }
  }

}

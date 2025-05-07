import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'prj-angular';
  text = 'Felipe';
  pessoa1 = {
    status: 1,
    name: "Guilherme"
  }
  pessoa2 = {
    status: 2,
    name: "Guiler"
  }
  pessoa3 = {
    status: 3,
    name: "Gui"
  }

  getStyle = (status: number) => {
    console.log("Função metodo: quantas vezes fui chamado?"); // 12 vezes...
    return status === 1 ? 'active' : status === 2 ? 'partial' : 'blocked'

  };
}



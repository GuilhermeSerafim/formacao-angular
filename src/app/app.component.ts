import { Component } from '@angular/core';
interface IPlano {
  tipo: 'Simples' | 'Premium' | 'Avançado'; // restringe valores possíveis
  preco: number;
}
interface IPessoa {
  nome?: string,
  idade: number,
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  prop = true;
  toggleDiv() {
    this.prop = !this.prop;
  }
  title = 'prj-angular';

}

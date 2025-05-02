import { Component } from '@angular/core';
interface IPlano {
  tipo: 'Simples' | 'Premium' | 'Avançado'; // restringe valores possíveis
  preco: number;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  planoSimples: IPlano = {
    preco: 100,
    tipo: "Simples"
  }
  planoPremium: IPlano = {
    preco: 300,
    tipo: "Premium"
  }
  planoAvancado: IPlano = {
    preco: 400,
    tipo: "Avançado"
  }
  onCardButtonClicked() {
    console.log("Simulando chamada HTTP")
  }
}

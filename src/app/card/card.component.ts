import { Component } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss'
})
export class CardComponent {
  //@ts-ignore
  prop;
  plano = {
    tipo: 'Simples',
    preco: 100
  }

  getFullPrice() {
    return `R$${this.plano.preco},00/Mês`
  }
}

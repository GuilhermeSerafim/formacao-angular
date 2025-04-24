import { Component } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss'
})
export class CardComponent {
  tipo = 'Simples'
  preco = 100

  getFullPrice() {
    return `R$${this.preco},00/Mês`
  }
}

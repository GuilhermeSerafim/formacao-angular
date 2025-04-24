import { Component } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss'
})
export class CardComponent {
  tipo = 'Simples'
  preco = 100


  numero: number = 0;

  getFullPrice() {
    return `R$${this.preco},00/Mês`
  }


  ngOnInit(): void {
    this.contarAte(10);
  }

  contarAte(limite: number): void {
    const timer = setInterval(() => {
      this.numero++;
      console.log(`Valor atual: ${this.numero}`);

      if (this.numero >= limite) {
        clearInterval(timer);
        console.log('Contagem finalizada.');
      }
    }, 1000); // atualiza de 1 em 1 segundo
  }
}

import { Component } from '@angular/core';
import { LinhaCard } from '../../interfaces/linha-card';

@Component({
  selector: 'app-credit-card',
  templateUrl: './credit-card.component.html',
  styleUrl: './credit-card.component.scss'
})
export class CreditCardComponent {
  itemsCreditCard: LinhaCard[] = [
    { textLeft: 'Limite de Compra', textRight: 'R$ 1000,00', line: true },
    { textLeft: 'Disponível', textRight: 'R$ 1200,00', line: true },
    { textLeft: 'Limite de Saque', textRight: 'R$ 2000,00', line: true },
    { textLeft: 'Disponível', textRight: 'R$ 1300,00', line: false },
    { textLeft: 'Limite Total Utilizado', textRight: 'R$ 3000,00', line: false },
  ]
}

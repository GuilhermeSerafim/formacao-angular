import { Component } from '@angular/core';
import { LinhaCard } from '../../interfaces/linha-card';

@Component({
  selector: 'app-balance-card',
  templateUrl: './balance-card.component.html',
  styleUrl: './balance-card.component.scss'
})
export class BalanceCardComponent {
  itemsBalanceCard: LinhaCard[] = [
    { textLeft: 'Conta Corrente', textRight: 'R$ 200,00', line: true },
    { textLeft: 'Conta Corrente Saldo Vinculados', textRight: 'R$ 300,00', line: true },
    { textLeft: 'Conta Poupança Saldo Vinculados', textRight: 'R$ 400,00', line: true },
    { textLeft: 'Investimentos com Baixa Automática', textRight: 'R$ 500,00', line: true },
    { textLeft: 'Investimentos sem Baixa Automática', textRight: 'R$ 500,00', line: true },
  ]
}

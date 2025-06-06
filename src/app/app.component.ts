import { AfterViewInit, Component, ElementRef, OnInit, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { LinhaCard } from './interfaces/linha-card';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'prj-angular';

  itensSaldosDisponiveisMockado: LinhaCard[] = [
    { chave: 'Conta Corrente', valor: 'R$ 200,00', line: true },
    { chave: 'Conta Corrente Saldo Vinculados', valor: 'R$ 300,00', line: true },
    { chave: 'Conta Poupança Saldo Vinculados', valor: 'R$ 400,00', line: true },
    { chave: 'Investimentos com Baixa Automática', valor: 'R$ 500,00', line: true },
    { chave: 'Investimentos sem Baixa Automática', valor: 'R$ 500,00', line: true }
  ]
}
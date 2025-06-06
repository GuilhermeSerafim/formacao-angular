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
    { textLeft: 'Conta Corrente', textRight: 'R$ 200,00', line: true },
    { textLeft: 'Conta Corrente Saldo Vinculados', textRight: 'R$ 300,00', line: true },
    { textLeft: 'Conta Poupança Saldo Vinculados', textRight: 'R$ 400,00', line: true },
    { textLeft: 'Investimentos com Baixa Automática', textRight: 'R$ 500,00', line: true },
    { textLeft: 'Investimentos sem Baixa Automática', textRight: 'R$ 500,00', line: false },
  ]
}
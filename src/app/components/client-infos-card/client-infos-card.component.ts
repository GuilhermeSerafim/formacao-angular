import { Component, OnInit } from '@angular/core';
import { LinhaCard } from '../../interfaces/linha-card';

@Component({
  selector: 'app-client-infos-card',
  templateUrl: './client-infos-card.component.html',
  styleUrl: './client-infos-card.component.scss'
})
export class ClientInfosCardComponent {
  itemsClientInfos: LinhaCard[] = [
    { textLeft: 'Nome', textRight: 'Felipe da Silva Freitas', line: true },
    { textLeft: 'Idade', textRight: '26 anos', line: true },
    { textLeft: 'Renda Mensal', textRight: 'R$ -1000,00', line: true },
    { textLeft: 'Nacionalidade', textRight: 'Brasileiro' },
  ]
} 

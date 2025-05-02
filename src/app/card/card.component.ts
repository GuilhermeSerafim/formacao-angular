import { Component, Input, ViewEncapsulation } from '@angular/core';

interface IPlano {
  infos: IInfos;
}

interface IInfos {
  tipo: string;
  preco: number;
}

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss',
})

export class CardComponent {
  buttonClicked(valueEmited: object) {
    console.log("Componente pai pode reagir:", valueEmited);
  }
  @Input('planTypeAlias') planType: string = '';
  @Input({ required: true, alias: 'planPriceAlias' }) planPrice: number = 0;
}

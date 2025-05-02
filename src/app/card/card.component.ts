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
  @Input({ required: true, alias: 'planPriceAlias' }) planPrice: number = 0;
  @Input({ alias: "planType", transform: (value: string) => value.toUpperCase()}) planType: string = '';


  buttonClicked(valueEmited: object) {
    // Exibindo valor manipulado com uppercase
    console.log("Get value:", this.planType);
  }
}

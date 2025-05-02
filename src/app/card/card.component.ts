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
  private _planType: string = '';
  @Input({ required: true, alias: 'planPriceAlias' }) planPrice: number = 0;
  
  // Set
  @Input("planType") // Boa prática
  set planType(value: string) {
    this._planType = value.toUpperCase();
  }

  // Get
  get planType(): string {
    return this._planType;
  }


  buttonClicked(valueEmited: object) {
    // Exibindo valor manipulado com uppercase
    console.log("Get value:", this._planType);
  }
}

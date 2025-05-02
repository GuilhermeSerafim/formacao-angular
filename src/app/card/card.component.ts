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

  // Set
  private _planType: string = '';
  @Input() set planType(value: string) {
    this._planType = value.toUpperCase();
  }

  // Get
  get planType(): string {
    return this._planType;
  }


  buttonClicked(valueEmited: object) {
    console.log("Set value...")
    this._planType = 'Value123';
    console.log("Get value:", this._planType);
  }
}

import { Component, Input, ViewEncapsulation } from '@angular/core';

// Caso a lógica seja mais complexa, você consegue resolver em uma função externa
const handlePlanType = (value: string): string => value.toUpperCase(); 

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss',
})

export class CardComponent {
  @Input({ required: true, alias: 'planPriceAlias' }) planPrice: number = 0;
  @Input({ alias: "planType", transform: (value: string) => handlePlanType(value)}) planType: string = '';


  buttonClicked(valueEmited: object) {
    // Exibindo valor manipulado com uppercase
    console.log("Get value:", this.planType);
  }
}

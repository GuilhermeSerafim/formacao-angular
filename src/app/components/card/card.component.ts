import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss'
})
export class CardComponent {

  @Input({ required: true }) cardPlan: string = '';
  @Input({ required: true }) cardPrice: number = 0;
  @Input() cardStyle: 'orange' | 'purple' = 'orange';
}

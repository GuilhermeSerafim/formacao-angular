import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss'
})
export class CardComponent {

  @Input({ required: true }) cardPlan: string = '';
  @Input({ required: true }) cardPrice: number = 0;
  @Input() cardStyle: 'orange' | 'purple' = 'orange';
  @Output('buttonClicked') buttonClickedEmitt = new EventEmitter<void>();
  onButtonClicked() {
    this.buttonClickedEmitt.emit();
  }
}

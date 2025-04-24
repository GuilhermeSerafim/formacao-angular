import { Component } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss'
})
export class CardComponent {
  // Com any, você está dizendo: "A variável plano pode ser qualquer coisa (objeto, string, número, função...)".
  plano: any = {
    infos: undefined
  }
}

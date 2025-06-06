import { Component, Input } from '@angular/core';
import { LinhaCard } from '../../interfaces/linha-card';

@Component({
  selector: 'app-card-content',
  templateUrl: './card-content.component.html',
  styleUrl: './card-content.component.scss'
})
export class CardContentComponent {
  @Input({ required: true, alias: "rows" }) cardRows: LinhaCard[] = [];
}

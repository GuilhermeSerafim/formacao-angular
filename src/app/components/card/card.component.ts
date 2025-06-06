import { Component, Input } from '@angular/core';
import { LinhaCard } from '../../interfaces/linha-card';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss'
})
export class CardComponent {
  @Input({ required: true, alias: "title" }) titleCard: string = "";
  @Input({ alias: "colorTitle" }) colorTitleCard: string = "#e98132";
  @Input({ required: true, alias: "src" }) srcCard: string = "";
  @Input({ alias: "alt" }) altCard: string = "";
  @Input({ alias: "textRight" }) textRightCard: string = "";
  @Input({ required: true, alias: "rows" }) cardRows: LinhaCard[] = [];
}

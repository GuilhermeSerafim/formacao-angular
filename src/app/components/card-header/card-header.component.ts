import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card-header',
  templateUrl: './card-header.component.html',
  styleUrl: './card-header.component.scss'
})
export class CardHeaderComponent {
  @Input({ alias: "colorTitle"}) colorTitleCard: string = "#e98132";
  @Input({required: true, alias: "title"}) titleCard: string = "";
  @Input({required: true, alias: "src"}) srcCard: string = "";
  @Input({required: false, alias: "alt"}) altCard: string = "";
  @Input({required: false, alias: "textRight"}) textRightCard: string = "";

}

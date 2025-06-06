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
  summaryCount = 0;


  get firstSummaryIndex(): number {
    return this.cardRows.findIndex(r => r.bgGrayLine);
  }

  // Retorna o índice do último item com 'bgGrayLine' true
  get lastSummaryIndex(): number {
    return this.cardRows
      .map((c, i) => c.bgGrayLine ? i : -1)  // Mapeia: se for bgGrayLine, mantém o índice; senão -1
      .filter(i => i !== -1)                // Remove os -1
      .at(-1) ?? -1;                        // Retorna o último índice válido, ou -1 se não houver
  }

}

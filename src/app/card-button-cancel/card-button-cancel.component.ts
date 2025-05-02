import { booleanAttribute, Component, Input } from '@angular/core';

@Component({
  selector: 'app-card-button-cancel',
  templateUrl: './card-button-cancel.component.html',
  styleUrls: ['./card-button-cancel.component.scss'] // Sobrepopondo
})
export class CardButtonCancelComponent {
  // Verifica se a propriedade está sendo referenciada - booleanAttribute
  // tipoAttribute também é usado para conversões - evite tantos transforms...
  @Input({transform: booleanAttribute}) buttonDisabled: boolean = false;
}

import { Component, ContentChild, TemplateRef } from '@angular/core';

@Component({
  selector: 'app-card-template-content',
  templateUrl: './card-template-content.component.html',
  styleUrl: './card-template-content.component.scss'
})
export class CardTemplateContentComponent {
  @ContentChild('meuTemplate') templateContent!: TemplateRef<any>;
}

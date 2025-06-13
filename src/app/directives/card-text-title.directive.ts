import { Directive } from '@angular/core';

@Directive({
  selector: 'app-card-text-title',
  host: { "class": 'meu-texto' },
})
export class CardTextTitleDirective {
}

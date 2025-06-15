import { Directive } from '@angular/core';

@Directive({
  selector: '[appCardMainText]',
  host: { "class": 'ca-c-card__main-text' },
})
export class CardMainTextDirective { }

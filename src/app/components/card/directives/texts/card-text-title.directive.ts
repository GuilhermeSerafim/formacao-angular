import { Directive, HostBinding, Input } from '@angular/core';

@Directive({
  selector: 'app-card-text-title, [appCardTextTitle]',
  host: { "class": 'ca-c-card__sub-text' },
})
export class CardTextTitleDirective { }

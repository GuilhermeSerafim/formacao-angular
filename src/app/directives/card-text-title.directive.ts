import { Directive, HostBinding, Input } from '@angular/core';

@Directive({
  selector: 'app-card-text-title, [appCardTextTitle]',
  host: { "class": 'meu-texto' },
})
export class CardTextTitleDirective {
  @Input()
  @HostBinding('style.color') color: string = '';

}

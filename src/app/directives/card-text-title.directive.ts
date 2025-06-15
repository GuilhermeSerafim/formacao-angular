import { Directive, HostBinding, Input } from '@angular/core';

@Directive({
  selector: 'app-card-text-title',
  host: { "class": 'meu-texto' },
})
export class CardTextTitleDirective {
  @Input()
  @HostBinding('style.color') color: string = '';
}

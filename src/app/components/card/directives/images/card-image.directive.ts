import { Directive, HostBinding, Input } from '@angular/core';

@Directive({
  selector: '[appCardImage]'
})
export class CardImageDirective {
  @Input() size: "low" | "medium" | "large" = "medium";

  @HostBinding('style.width')
  get imgSize(): string {
    return {
      low: "32px",
      medium: "64px",
      large: "128px",
    }[this.size] || '64px';
  }

}

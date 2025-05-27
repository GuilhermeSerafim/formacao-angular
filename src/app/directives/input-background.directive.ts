import { Directive, HostBinding, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appInputBackground]'
})
export class InputBackgroundDirective {
  // Mesmo nome do seletor, portanto, use a diretiva e coloque o valor logo a direita
  @Input() appInputBackground: string = 'white';
  @Input('aliasTextColor') textColor: string = 'black';

  @HostBinding('style.backgroundColor') bgColor: string = '';
  @HostBinding('style.color') color: string = '';

  @HostListener('focus') onFocus() {
    this.bgColor = this.appInputBackground;
    this.color = this.textColor;
  }

  @HostListener('blur') onBlur() {
    this.bgColor = 'white';
    this.color = 'black'
  }
  constructor() { }

}

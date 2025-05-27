import { Directive, HostBinding } from '@angular/core';

@Directive({
  selector: '[appStyle]'
})
export class StyleDirective {
  @HostBinding('style') paragrafoEstilizado = {
    backgroundColor: 'purple',
    color: 'yellow'
  }   
}

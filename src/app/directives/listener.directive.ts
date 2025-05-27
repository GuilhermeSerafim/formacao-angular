import { Directive, HostListener } from '@angular/core';

@Directive({
  selector: '[appListener]'
})
export class ListenerDirective {

  @HostListener('click') onClick = () => console.log('click');
  @HostListener('keyup', ['$event']) onKeyUp = (e: KeyboardEvent) => {
    const fullText = (e.target as HTMLInputElement).value;
    console.log(fullText);
  };

}

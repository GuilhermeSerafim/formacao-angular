import { Directive, ElementRef, HostListener } from '@angular/core';
import { TesteService } from '../services/teste.service';

@Directive({
  selector: '[appCreateDiv]'
})
export class CreateDivDirective {

  constructor(private readonly _elRef: ElementRef, private readonly _testeService: TesteService) { }

  @HostListener('click') onClick = () => {
    this._testeService.create(this._elRef);
  }
}

import { AfterViewInit, Directive, ElementRef, HostBinding, OnInit } from '@angular/core';

// Direitivas também possuem life cycle
@Directive({
  selector: '[appFocusSecondInput]'
})
export class FocusSecondInputDirective implements AfterViewInit {
  // Modificações mais diretas = hosting binding é ideal
  // @HostBinding('style.backgroundColor') bgColor = "blue";
  // @HostBinding('textContent') textContent = "Im div"; // Comentando para não substituir os elementos filhos (inputs)
  constructor(private _elRef: ElementRef) {

  }
  ngAfterViewInit(): void {

    console.log(this._elRef);
    const inputList = this._elRef.nativeElement.querySelectorAll('input') as HTMLInputElement[];
    if (inputList.length > 1) {
      inputList[1].focus();
    }

  }
}

/*
  HostBinding -> Rápido, sucinto e especifico
  ElementRef -> Poderoso
*/
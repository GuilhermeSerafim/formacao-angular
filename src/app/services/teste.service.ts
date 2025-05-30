import { ElementRef, Injectable } from '@angular/core';

// Fala que consigo injetar essa classe em outros lugares
@Injectable({
  providedIn: 'root'
})
export class TesteService {

  // Sem ElementHost - NullInjector
  // constructor(private readonly _elRef: ElementRef) { }

  // INCOMUM
  create(elRef: ElementRef) {
    const newDiv = document.createElement('div');
    newDiv.textContent = "Im new div";
    newDiv.classList.add('bg-red');
    elRef.nativeElement.appendChild(newDiv);

  }
}

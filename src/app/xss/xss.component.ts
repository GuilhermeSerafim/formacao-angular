import { Component, ElementRef, input } from '@angular/core';

@Component({
  selector: 'app-xss',
  templateUrl: './xss.component.html',
  styleUrl: './xss.component.scss'
})
export class XssComponent {
  constructor(private readonly _elRef: ElementRef){}
  createElement(inputText: string) {
    const divEl = document.createElement('div') as HTMLDivElement;
    divEl.innerHTML = inputText;
    divEl.style.backgroundColor = 'red'
    this._elRef.nativeElement.appendChild(divEl);
  }

}

import { Component, ElementRef, input, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-xss',
  templateUrl: './xss.component.html',
  styleUrl: './xss.component.scss'
})
export class XssComponent {

  constructor(
    private readonly _elRef: ElementRef,
    private readonly _renderer2: Renderer2
  ) { }

  createElement(inputText: string) {
    const divEl = document.createElement('div') as HTMLDivElement;
    divEl.innerHTML = inputText;
    divEl.style.backgroundColor = 'red'
    this._elRef.nativeElement.appendChild(divEl);
  }


  createElementCorrect(inputText: string) {
    const divEl = this._renderer2.createElement('div');
    const text = this._renderer2.createText(inputText);
    // inserindo texto dentro da divEl
    this._renderer2.appendChild(divEl, text);
    // inserindo divEl dentro do nosso template pelo ElementRef
    this._renderer2.appendChild(this._elRef.nativeElement, divEl);
  } 

}

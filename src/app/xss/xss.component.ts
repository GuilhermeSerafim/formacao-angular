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
    // Escopo do componente (ng_hash), diferente do document, que cria globalmente - global não irá aplicar os estilos do xss.component.css...
    this._renderer2.appendChild(divEl, text);
    this._renderer2.setStyle(divEl, 'color', 'yellow');
    this._renderer2.addClass(divEl, "bg-purple")
    this._renderer2.appendChild(this._elRef.nativeElement, divEl);
  } 

}

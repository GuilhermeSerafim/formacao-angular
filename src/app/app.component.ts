import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'prj-angular';
  @ViewChild('meuInput') // Acessando template variable 
  meuInputEl!: ElementRef<HTMLInputElement>;
  updateInputText() {
    this.meuInputEl.nativeElement.value = 'Texto atualizado!'
  }
  focus() {
    this.meuInputEl.nativeElement.focus();
  }
}



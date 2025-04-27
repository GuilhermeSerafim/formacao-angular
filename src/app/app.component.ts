import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'prj-angular';
  inputText = "Texto dinâmico padrão";
  inputType = "text";
  isDisabled = false;
  inputTitle = "KKKKKKKKKK";
  enableInput() {
    this.isDisabled = false;
  }

  disableInput() {
    this.isDisabled = true;
  }
  setPasswordTypeInput() {
    this.inputType = "password";
  }
  setTextTypeInput() {
    this.inputType = "text";
  }
  HandleInputKeyup($event: KeyboardEvent) {
    // Fazendo um casting - Dizendo ao Angular que o evento que estou recebendo é um input element
    const currentText = ($event.target as HTMLInputElement).value;
    console.log(currentText);
  }
}

import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { NgModel } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements AfterViewInit {
  // É mais fácil validar o input pela instância do form control
  @ViewChild('meuInputFormControl') inputFormControl!: NgModel;
  @ViewChild('meuInput') inputEl!: ElementRef<HTMLInputElement>;

  ngAfterViewInit(): void {
    console.log('Instância do Form Control:' + this.inputFormControl);
    console.log('Instância do Input:' + this.inputEl);
  }

  send() {
    if (this.inputFormControl.valid && this.inputFormControl.touched) {
      console.log('Enviado com sucesso');
    } else {
      console.log('Inválido');
    }
  }
}

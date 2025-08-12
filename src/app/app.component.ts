import {
  AfterViewChecked,
  AfterViewInit,
  Component,
  OnInit,
  ViewChild,
} from '@angular/core';
import { NgModel } from '@angular/forms';

export enum UserStatusEnum {
  ATIVO = 1,
  INATIVO = 2,
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements AfterViewInit {
  @ViewChild('meuInputFormControl') inputEl!: NgModel;

  ngAfterViewInit(): void {
    console.log(this.inputEl);
  }
  send() {
    if (this.inputEl.valid && this.inputEl.touched) {
      console.log('Enviado com sucesso');
    } else {
      console.log('Inválido')
    }
  }
}

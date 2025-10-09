import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-control',
  templateUrl: './form-control.component.html',
  styleUrl: './form-control.component.scss',
})
export class FormControlComponent implements OnInit {
  nome = new FormControl({ value: '', disabled: true }, Validators.required);
  ngOnInit(): void {
    console.log(this.nome);
  }
  mostrarStatus() {
    console.log(this.nome);
  }
  alterarValor() {
    this.nome.setValue('Guilherme');
  }
  inputAlterado() {
    console.log(this.nome.value);
  }
  habilitar() {
    this.nome.enable();
  }
  desabilitar() {
    this.nome.disable();
  }
}

import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrl: './form.component.scss',
})
export class FormComponent implements AfterViewInit {
  @ViewChild('meuForm') form!: NgForm;
  text: string = "Texto inicial";
  ngAfterViewInit(): void {
    console.log(this.form);
  }
  onSubmit(_t5: NgForm) {
    console.log(_t5);
    // Fazendo isso, modificamos apenas a propriedade da instância do objeto, mas não afeta no template
    this.form.value['nome'] = "Texto Alterado";
    console.log(this.text); // Resultado: "Texto inicial"
  }
}

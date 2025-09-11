import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrl: './form.component.scss',
})
export class FormComponent implements AfterViewInit {
  @ViewChild('meuForm') form!: NgForm;
  text: string = 'Texto inicial';
  textarea: string = 'Teste';
  select: string = '1';
  radionButton: string = '1';
  checkbox: boolean = true;
  ngAfterViewInit(): void {
    console.log(this.form);
  }
  onSubmit(_t5: NgForm) {
    console.log(_t5.value);
  }
  onReset(form: NgForm) {
    // Comportamento inesperado: eles de fato são resetados no template, mas as props são resetadas depois, portanto, no primeiro momento você pode não esperar esse comportamento
    form.reset(); // Limpagem manual
    console.log(form.value);
    console.log(this.text);
    console.log(this.textarea);
    console.log(this.select);
    console.log(this.radionButton);
    console.log(this.checkbox);
  }
}

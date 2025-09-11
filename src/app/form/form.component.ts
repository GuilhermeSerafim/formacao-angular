import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrl: './form.component.scss',
})
export class FormComponent implements AfterViewInit {
  @ViewChild('meuForm') form!: NgForm;
  @ViewChild('meuInput') input!: NgForm;
  text: string = 'Texto inicial';
  textarea: string = 'Teste';
  select: string = '1';
  radionButton: string = '1';
  checkbox: boolean = true;
  ngAfterViewInit(): void {
    // A cada mudança esse valueChanges dispara (de acordo com o que tiver configurado no updateOn do form)
    this.form.valueChanges?.subscribe(value => console.log("Form change:", value));
    this.input.valueChanges?.subscribe(value => console.log("Input change:", value));
  }
  onSubmit(_t5: NgForm) {
    console.log("OnSubmit: "+ _t5.value);
  }
  onReset(form: NgForm) {
    form.reset();
  }
}

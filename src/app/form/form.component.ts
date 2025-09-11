import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrl: './form.component.scss'
})
export class FormComponent implements AfterViewInit{
  @ViewChild('meuForm') form!: NgForm;
  ngAfterViewInit(): void {
    console.log(this.form);
    
  }

}

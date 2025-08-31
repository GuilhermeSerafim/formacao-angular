import { Component, ViewChild } from '@angular/core';
import { NgModel } from '@angular/forms';

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrl: './select.component.scss',
})
export class SelectComponent {
  @ViewChild('meuSelecteFormControl') meuSelectFormControl!: NgModel;
}

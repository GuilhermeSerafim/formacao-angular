import { Component, ViewChild } from '@angular/core';
import { NgModel } from '@angular/forms';

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrl: './select.component.scss',
})
export class SelectComponent {
  @ViewChild('meuSelectFormControl') meuSelectFormControl!: NgModel;
  nationalities: { id: number; description: string }[] = [
    {
      id: 1,
      description: 'Brasileira',
    },
    {
      id: 2,
      description: 'Argentina',
    },
    {
      id: 3,
      description: 'Espanhola',
    },
  ];
}

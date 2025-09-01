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

  nationalitySelected: number | undefined;

  // Aqui eu usaria se caso eu quisesse manipular o que estou recebendo do select
  onChange(nationality: string) { // É sempre string aqui
    console.log('onChange nationality', nationality);

    // Esse + antes de nationality é o operador unário de mais em JavaScript e TypeScript.
    // Ele é usado para converter o valor para número (do tipo number).
    this.nationalitySelected = +nationality;
  }
}

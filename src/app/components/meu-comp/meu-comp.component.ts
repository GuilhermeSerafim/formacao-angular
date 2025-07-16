import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-meu-comp',
  templateUrl: './meu-comp.component.html',
  styleUrl: './meu-comp.component.scss'
})
export class MeuCompComponent implements OnInit {
  // Só será inicilizado se caso realmente o componente for renderizado, por isso a vantagem do ng template
  ngOnInit(): void {
    console.log('Meu comp on init');
  }

}

import { Component } from '@angular/core';

@Component({
  selector: 'app-filter-components',
  templateUrl: './filter-components.component.html',
  styleUrl: './filter-components.component.scss'
})
export class FilterComponentsComponent {
  foods = [
    { value: 'steak-0', viewValue: 'Steak' },
    { value: 'pizza-1', viewValue: 'Pizza' },
    { value: 'tacos-2', viewValue: 'Tacos' },
  ];

}

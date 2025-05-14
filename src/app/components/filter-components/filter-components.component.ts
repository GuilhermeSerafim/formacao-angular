import { Component } from '@angular/core';
import { IFilterOptions } from '../../interfaces/filter-options';

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
  
  statusList = [
    { description: 'Ativo', value: true },
    { description: 'Inativo', value: false },
  ]
  
  filterOptions: IFilterOptions = {
    name: undefined,
    startDate: undefined,
    endDate: undefined,
    status: undefined
  }
  
  onFilter() {
    console.log(this.filterOptions)
  }
}

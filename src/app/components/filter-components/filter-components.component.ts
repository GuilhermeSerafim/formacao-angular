import { Component, EventEmitter, Output } from '@angular/core';
import { IFilterOptions } from '../../interfaces/filter-options';

@Component({
  selector: 'app-filter-components',
  templateUrl: './filter-components.component.html',
  styleUrl: './filter-components.component.scss'
})
export class FilterComponentsComponent {

  @Output('onFilter') onFilterEmmit = new EventEmitter<IFilterOptions>();

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
    this.onFilterEmmit.emit(this.filterOptions);
  }
}

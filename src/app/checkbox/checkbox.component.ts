import { Component } from '@angular/core';

@Component({
  selector: 'app-checkbox',
  templateUrl: './checkbox.component.html',
  styleUrl: './checkbox.component.scss',
})
export class CheckboxComponent {
  isActive: boolean = false;
  onChange(e: boolean) {
    console.log(e);
    this.isActive = e;
  }
}

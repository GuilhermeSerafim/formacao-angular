import { Component } from '@angular/core';
import { CustomErrorStateMatcher } from '../utils/custom-error-state.matcher';

@Component({
  selector: 'app-ex2',
  templateUrl: './ex2.component.html',
  styleUrl: './ex2.component.scss',
})
export class Ex2Component {
  matcher = new CustomErrorStateMatcher();
  onClick() {
    throw new Error('Method not implemented.');
  }
}

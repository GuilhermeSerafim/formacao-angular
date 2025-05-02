import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'prj-angular';
  // Imagine que isso é a chamada de uma API externa
  cardPlanType = 'Simples';
  cardPlanPrice = 100;
}

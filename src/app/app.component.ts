import { AfterViewInit, Component, ElementRef, OnInit, QueryList, ViewChild, ViewChildren } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './ng-if/ng-if.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'prj-angular';
  conditional: boolean = true;
}
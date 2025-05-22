import { ChangeDetectorRef, Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'prj-angular';
  binding: string = "Guiler";

  constructor(
    private _cdRef: ChangeDetectorRef
  ) { }

  changeDetection() {
    this._cdRef.detectChanges();
  }
}



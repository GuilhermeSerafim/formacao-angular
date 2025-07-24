import {
  AfterViewInit,
  Component,
  ElementRef,
  OnInit,
  QueryList,
  ViewChild,
  ViewChildren,
} from '@angular/core';

export enum UserStatusEnum {
  ATIVO = 1,
  INATIVO = 2,
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  // minhaData: Date-> INCORRETO! = '2023-10-21T21:00:00.000Z';
  // Quando a data vem nesse formato, não coloca Date, pois o Date é do JS, e esse formato é https://en.wikipedia.org/wiki/ISO_8601
  minhaData: string = '2023-10-21T21:00:00.000Z'; // Z == conversão para região
  minhaData2: string = "2023-10-21T21:00:00.000";
  ngOnInit(): void {
    console.log('Data convertida para região', new Date(this.minhaData));
    console.log('Data UTC-0', new Date(this.minhaData).toUTCString());
    // A conversão regional, foi feita no new Date e não no date pipe
    console.log('Timestamp:', new Date(this.minhaData).getTime());
  }
}

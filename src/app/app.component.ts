import { AfterViewInit, Component, ElementRef, QueryList, ViewChild, ViewChildren } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements AfterViewInit {
  title = 'prj-angular';
  @ViewChild('minhaDiv') divEl!: ElementRef<HTMLDivElement>;
  
  ngAfterViewInit(): void {
     this.divEl.nativeElement.style.backgroundColor = 'orange';
     this.divEl.nativeElement.textContent = 'Sou uma div';
     this.divEl.nativeElement.classList.add('minha-classe');
  }
}



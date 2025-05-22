import { AfterViewInit, Component, ElementRef, QueryList, ViewChildren } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements AfterViewInit {
  title = 'prj-angular';
  buttonList = [
    'Botão 1',
    'Botão 2',
    'Botão 3',
  ]

  @ViewChildren('meuButton') buttonsEl!: QueryList<ElementRef<HTMLButtonElement>>;

  ngAfterViewInit(): void {
    console.log(this.buttonsEl)
  }

  changeColor(e: MouseEvent) {
    const btnElement = e.target as HTMLButtonElement;
    btnElement.style.backgroundColor = "orange";
  }
  
  resetButtons = () => this.buttonsEl.forEach(btnEl => btnEl.nativeElement.style.backgroundColor = '#f2f2f2');
}



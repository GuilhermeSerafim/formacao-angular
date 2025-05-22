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

  ngAfterViewInit() {
    this.buttonsEl.toArray()[0].nativeElement.style.backgroundColor = "blue";
  }

  changeColor(e: MouseEvent) {
    const btnElement = e.target as HTMLButtonElement;
    btnElement.style.backgroundColor = "orange";
  }

  resetButtons = () => this.buttonsEl.forEach(btnEl => btnEl.nativeElement.style.backgroundColor = '#f2f2f2');

  first() {
    console.log("Resgatando elemento por classe",
      this.buttonsEl.find(btnEl => btnEl.nativeElement.className === "btn-0"));
  }
}



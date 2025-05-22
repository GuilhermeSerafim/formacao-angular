import { Component, ElementRef, ViewChild } from '@angular/core';
import { FilhoComponent } from './filho/filho.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'prj-angular';
  // É mais recomendável utilizar o @input e @output para deixar melhor documentado, dificilemnte vc vai utilizar isto
  @ViewChild(FilhoComponent) filhoCompRef!: FilhoComponent;
  hello() {
    this.filhoCompRef.dizerOi();
    this.filhoCompRef.message = 'Oi atualizado';
  }
}



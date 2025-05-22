import { Component, ElementRef, ViewChild } from '@angular/core';
import { FilhoComponent } from './filho/filho.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'prj-angular';
  // Quando pegamos componente, declaramos diretamente
  @ViewChild('filhoComp') filhoCompRef!: FilhoComponent;
  hello() {
    this.filhoCompRef.dizerOi();
    this.filhoCompRef.message = 'Oi atualizado';
  }
}



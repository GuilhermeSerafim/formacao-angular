import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'prj-angular';
  clicou(_t6: HTMLInputElement) {
    console.log(_t6.value);
    _t6.value = 'Atualizado'
  }
}

const funcaoPai = () => {
  let pai = 'pai';
  const funcaoFilha = () => {
    let filha = 'filha';
    const funcaoNeto = () => {
      pai = 'vó';
    }
  }
}



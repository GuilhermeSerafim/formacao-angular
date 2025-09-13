import { Component } from '@angular/core';
import { CustomErrorStateMatcher } from '../utils/custom-error-state.matcher';
import { ErrorStateMatcher } from '@angular/material/core';

@Component({
  selector: 'app-ex2',
  templateUrl: './ex2.component.html',
  styleUrl: './ex2.component.scss',
  providers: [
    // Sempre que alguém tentar instanciar a classe ErroStateMatcher neste componente
    // Na real, vai pegar a classe CustomErrorStateMatcher, dessa forma, pegará nossa personalização de quando irá exibir o erro
    { provide: ErrorStateMatcher, useClass: CustomErrorStateMatcher },
  ],
})
export class Ex2Component {
  matcher = new CustomErrorStateMatcher();
  onClick() {
    throw new Error('Method not implemented.');
  }
}

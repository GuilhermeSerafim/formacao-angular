import { Component } from '@angular/core';

@Component({
  selector: 'app-sem-diretiva',
  templateUrl: './sem-diretiva.component.html',
  styleUrl: './sem-diretiva.component.scss'
})
export class SemDiretivaComponent {
  cor: string | undefined;
  aplicaBg() {
    this.cor = "red";
  }

  removeBg() {
    this.cor = undefined;
  }

}

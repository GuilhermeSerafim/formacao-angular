import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FilhoComponent } from './filho/filho.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit, AfterViewInit {
  title = 'prj-angular';
  @ViewChild('meuInput') meuInputEl!: ElementRef<HTMLInputElement>;

  // • Primeiro o Angular instancia a classe do componente, faz a injeção de dependências e inicializa propriedades padrão.
  // • Aqui ainda não existem dados de entrada (inputs) nem o template renderizado.
  constructor() {
    console.log("constructor")
  }

  // • É chamado logo após o Angular ter atribuído os valores de todos os @Input() e executado a primeira detecção de mudanças.
  // • Use-o para inicializar lógica que dependa de propriedades configuradas pelo pai.
  ngOnInit(): void {
    console.log("oninit")
  }

  // • Só é disparado depois que o Angular renderizou o template e criou todas as views filhas(e variáveis de referência como @ViewChild).
  // • Aqui já dá para acessar com segurança o this.meuInputEl.nativeElement e, por exemplo, dar foco no input.
  ngAfterViewInit(): void {
    console.log("afterview")
    this.meuInputEl.nativeElement.focus();
  }
}



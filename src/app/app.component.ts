import { AfterViewInit, Component, ElementRef, OnInit, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { TesteService } from './services/teste.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements AfterViewInit, OnInit {
  title = 'prj-angular';
  @ViewChild('minhaDiv') divEl!: ElementRef<HTMLDivElement>;

  constructor(
    private readonly _elRef: ElementRef,
    private readonly _testeService: TesteService
  ) { }
  
  ngOnInit(): void {
    // console.log(this._elRef.nativeElement.children[1]); // Outra forma
    // const divEl = this._elRef.nativeElement.querySelector('#minha-outra-div') as HTMLDivElement; // Acesso as propriedades no ts com + facilidade
    // divEl.style.backgroundColor = 'green';
    // divEl.textContent = 'Outra div';
    // divEl.addEventListener('click', () => console.log('Cliquei na div!'))
  }

  ngAfterViewInit(): void {
    // this.divEl.nativeElement.style.backgroundColor = 'orange';
    // this.divEl.nativeElement.textContent = 'Sou uma div';
    // this.divEl.nativeElement.classList.add('minha-classe');
  }

  createElement() {
    // Criação do elemento no contexto global -> Document
    // const newDiv = document.createElement('div');
    // newDiv.textContent = "Im new div";
    // newDiv.classList.add('bg-red');

    // Inclusão dele no nosso template
    // parentNode.appendChild(childNode); - parentNode -> Nosso componente
    // this._elRef.nativeElement.appendChild(newDiv);
    this._testeService.create(this._elRef);
  }
}


/* 
  A diferença do document para o Element Ref, é que o document é para toda a aplicação, enquanto o ElementRef é apenas para o componente
  -> document é do navegador, não do Javascript, e o ElementRef é do Angular!
*/

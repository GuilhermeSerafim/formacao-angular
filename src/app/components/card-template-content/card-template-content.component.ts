import { AfterContentInit, Component, ContentChild, OnInit, TemplateRef } from '@angular/core';

@Component({
  selector: 'app-card-template-content',
  templateUrl: './card-template-content.component.html',
  styleUrl: './card-template-content.component.scss'
})
export class CardTemplateContentComponent implements OnInit, AfterContentInit {
  @ContentChild('meuTemplate') templateContent!: TemplateRef<any>;

  // ngOnInit(): é chamado assim que o componente é inicializado, antes do conteúdo filho ser projetado.
  // ngAfterContentInit(): é chamado depois que o conteúdo externo (projetado com ng-content ou @ContentChild) é completamente carregado e disponível no componente.
  ngOnInit(): void {
    console.log('OnInit', this.templateContent);
  }
  ngAfterContentInit(): void {
    console.log('AfterContentInit', this.templateContent);
  }
}

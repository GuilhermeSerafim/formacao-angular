import { Directive, HostBinding, Input } from '@angular/core';

// Se você quer controle, escalabilidade e clareza no uso — continue com a diretiva.
// Se quiser flexibilidade visual total e abertura para skin, temas ou overrides CSS, talvez classes CSS tenham mais fôlego a longo prazo.
@Directive({
  selector: 'app-card-header',
  host: { 'class': 'ca-c-card__header'}
})
export class CardHeaderDirective {
  @Input() bgColor: "primmary" | "secondary" | "error" = "primmary"; 
  @HostBinding('style.backgroundColor')
  get cardBgColor(): string {
    return {
      secondary: "#32e9da",
      error: "red",
      primmary: "rgb(233, 129, 50)"  
    }[this.bgColor];
  } 
}

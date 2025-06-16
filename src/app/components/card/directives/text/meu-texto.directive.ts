import { Directive, HostBinding, Input } from '@angular/core';

// Simulando como eu faria uma diretiva para estilos padrões na aplicação
// Comentário simulando que estou na empresa:

// Todos os tamanhos de fontes estão nessa diretiva, justamente para a padronização
// Ex de uso: <h1 appMeuTexto size="large">Title</h1>
@Directive({
  selector: '[appMeuTexto]'
})
export class MeuTextoDirective {
  @Input() size: "low" | "medium" | "large" = "medium";

  @HostBinding('style.fontSize')
  get fontSize(): string {
    // Essa é uma forma enxuta e elegante de fazer uma espécie de "switch-case" usando objetos como mapa de valor.
    return {
      low: '12px',
      medium: '20px',
      large: '32px',
    }[this.size] || '20px'
  }  
}

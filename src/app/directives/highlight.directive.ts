import { Directive, HostBinding, HostListener } from "@angular/core";

@Directive({
    selector: "[appHighlight]",
})
// DIRETIVAS (ESSA É ATRIBUTO):
export class HighlightDirective {
    // Estruturais (*ngIf, *ngFor, etc.) → DOM: adicionam/removem/iteram elementos → atuam como fluxo de controle na view.
    // Atributo ([ngClass], [ngStyle], etc.) → elemento existente: mudam estilo/comportamento sem alterar sua existência.
    @HostBinding('style.backgroundColor') bgColor = 'transparent';

    @HostListener('mouseover') onMouseOver() {
        this.bgColor = 'purple'
    }

    @HostListener('mouseout') onMouseOut() {
        this.bgColor = 'transparent';
    }

}
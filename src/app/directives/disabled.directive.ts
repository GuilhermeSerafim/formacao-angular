import { Directive, HostBinding } from '@angular/core';

@Directive({
  selector: '[appDisabled]'
})
export class DisabledDirective {
  // Estamos acessando o atributo, só o fato do 'disabled' existir, ele não irá funcionar co
  // @HostBinding('attr.disabled') attrDisabled = false;

  // Aqui, o angular cuida pra gente, removendo o atributo disabled, e quando true, ele apenas add o att
  @HostBinding('disabled') propDisabled = false;


}

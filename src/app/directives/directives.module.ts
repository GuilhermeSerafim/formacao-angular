import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmailPatternValidatorDirective } from './email-pattern-validator.directive';

@NgModule({
  declarations: [
    EmailPatternValidatorDirective
  ],
  // Por que vamos utilizar essa diretiva no componente de outro módulo (component.module)
  exports: [EmailPatternValidatorDirective],
})
export class DirectivesModule {}

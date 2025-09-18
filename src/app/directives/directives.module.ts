import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmailPatternValidatorDirective } from './email-pattern-validator.directive';
import { CredentialsValidatorDirective } from './credentials-validator.directive';
import { PasswordStrengthValidatorDirective } from './password-strength-validator.directive';

@NgModule({
  declarations: [EmailPatternValidatorDirective, CredentialsValidatorDirective, PasswordStrengthValidatorDirective],
  // Por que vamos utilizar essa diretiva no componente de outro módulo (component.module)
  exports: [EmailPatternValidatorDirective, CredentialsValidatorDirective, PasswordStrengthValidatorDirective],
})
export class DirectivesModule {}

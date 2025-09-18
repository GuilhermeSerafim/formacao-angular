import { Directive } from '@angular/core';
import { AbstractControl, NG_VALIDATORS, ValidationErrors, Validator } from '@angular/forms';
import * as zxcvbn from 'zxcvbn';

@Directive({
  selector: '[appPasswordStrengthValidator]',
  providers: [
    {
      provide: NG_VALIDATORS,
      useExisting: PasswordStrengthValidatorDirective,
      multi: true,
    },
  ],
})
export class PasswordStrengthValidatorDirective implements Validator {
  constructor() {}
  validate(control: AbstractControl): ValidationErrors | null {

  }
}

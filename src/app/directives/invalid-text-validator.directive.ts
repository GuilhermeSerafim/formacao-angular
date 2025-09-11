import { Directive } from '@angular/core';
import {
  AbstractControl,
  NG_VALIDATORS,
  ValidationErrors,
  Validator,
} from '@angular/forms';

// Validador síncrono: roda na hora, retorna imediatamente (null ou um objeto de erro). Ex.: checar se campo está vazio, se tem tamanho mínimo.

// Validador assíncrono: precisa esperar uma operação externa, retorna um Observable/Promise. Ex.: verificar no servidor se um e-mail já está cadastrado.
@Directive({
  selector: '[appInvalidTextValidator]',
  providers: [
    // Registra a diretiva como validador customizado no Angular Forms
    // Mais pra frente vamos abordar e realmente entender isso...
    {
      provide: NG_VALIDATORS, // Esse injection token, utilizamos somente para validadores SINCRONOS!
      useExisting: InvalidTextValidatorDirective,
      multi: true,
    },
  ],
})
export class InvalidTextValidatorDirective implements Validator {
  validate(control: AbstractControl): ValidationErrors | null {
    const isValid = !control.value?.includes('guiler');
    return isValid ? null : { invalidText: true };
  }
}

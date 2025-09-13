import { AbstractControl, FormGroupDirective, NgForm } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';

// Não valida nada por si só.
// Ele só decide quando o Angular Material deve mostrar o estado de erro visual (bordas vermelhas, mat-error, etc.).
// Depende do status do controle (invalid, touched, dirty, submitted) para ativar a exibição de erros.
export class CustomErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(
    control: AbstractControl | null,
    form: FormGroupDirective | NgForm | null
  ): boolean {
    const FORM_IS_SUBMITTED = form && form.submitted;

    // CONTROL_IS_INVALID → O campo não passa nas validações (Validators.required, Validators.minLength, etc.).
    const CONTROL_IS_INVALID = control && control.invalid;

    const CONTROL_IS_DIRTY = control && control.dirty;
    const CONTROL_IS_TOUCHED = control && control.touched;

    // !!(true) → true
    // !!(false) → false
    // !!(null) → false
    // return !!CONTROL_IS_INVALID; -> Mostra o erro assim que a aplicação é carregada
    return !!(
      CONTROL_IS_INVALID &&
      (CONTROL_IS_DIRTY || CONTROL_IS_TOUCHED || FORM_IS_SUBMITTED)
    );
  }
}

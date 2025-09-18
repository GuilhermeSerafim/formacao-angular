import { Directive, forwardRef, Input } from '@angular/core';
import {
  AbstractControl,
  AsyncValidator,
  NG_ASYNC_VALIDATORS,
  ValidationErrors,
} from '@angular/forms';
import { map, Observable } from 'rxjs';
import { UsersPlaceholderService } from '../services/users-placeholder.service';

// Async
@Directive({
  selector: '[appCredentialsValidator]',
  providers: [
    {
      provide: NG_ASYNC_VALIDATORS,
      useExisting: forwardRef(() => CredentialsValidatorDirective),
      multi: true,
    },
  ],
})
export class CredentialsValidatorDirective implements AsyncValidator {
  @Input('appCredentialsValidator') propToCheck: 'username' | 'email' =
    'username';

  constructor(
    private readonly _usersPlaceHolderService: UsersPlaceholderService
  ) {}
  validate(
    control: AbstractControl
  ): Promise<ValidationErrors | null> | Observable<ValidationErrors | null> {
    // Modificando retorno do Observable com .pipe
    return this._usersPlaceHolderService.getUsersPlaceHolder().pipe(
      // Estamos manipulando cada item userListResponse com o map do rxjs
      map((usersListResponse) => {
        const hasUser = usersListResponse.find(
          // Dinamicidade em qual input colocamos...
          (user) =>
            user[this.propToCheck].toLowerCase() ===
            control.value.trim().toLowerCase()
        );
        const validatorKey = this.propToCheck === 'username' ? 'invalidUserName' : 'invalidEmail';
        return hasUser ? { [validatorKey]: true } : null;
      })
    );
  }
}

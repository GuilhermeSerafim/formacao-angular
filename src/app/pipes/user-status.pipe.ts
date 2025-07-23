import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'userStatus',
})
export class UserStatusPipe implements PipeTransform {
  transform(status: number): string {
    if (status == 1) return 'Ativo';
    else if (status == 2) return 'Inativo';
    else return 'Inválido';
  }
}

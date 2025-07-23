import { Pipe, PipeTransform } from '@angular/core';
import { UserStatusEnum } from '../app.component';

@Pipe({
  name: 'userStatus',
})
export class UserStatusPipe implements PipeTransform {
  transform(status: number): string {
    if (status == UserStatusEnum.ATIVO) return 'Ativo';
    else if (status == UserStatusEnum.INATIVO) return 'Inativo';
    else return 'Inválido';
  }
}

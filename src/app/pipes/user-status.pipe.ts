import { Pipe, PipeTransform } from '@angular/core';
import { UserStatusEnum } from '../app.component';
import { IUserStatusDescription } from '../interfaces/iuser-status-description';

@Pipe({
  name: 'userStatus',
})
export class UserStatusPipe implements PipeTransform {
  transform(userStatus: number): string {
    const userStatusDescription: IUserStatusDescription = {
      [UserStatusEnum.ATIVO]: 'Ativo',
      [UserStatusEnum.INATIVO]: 'Inativo',
    };

    return userStatusDescription[userStatus] ?? 'Inválido';
  }
}

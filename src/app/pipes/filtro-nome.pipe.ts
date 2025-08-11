import { Pipe, PipeTransform } from '@angular/core';
import { IUser } from '../interfaces/user';

@Pipe({
  name: 'filtroNome',
})
export class FiltroNomePipe implements PipeTransform {
  transform(users: IUser[] | null = [], filtro: string = ''): IUser[] {
    if (!users) {
      console.log('Users nulo');
      return [];
    };
    if (!filtro) return users;
    return users.filter((u) =>
      u.customerName.toLowerCase().includes(filtro.toLowerCase())
    );
  }
}

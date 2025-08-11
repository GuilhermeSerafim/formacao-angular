import { Pipe, PipeTransform } from '@angular/core';
import { IUser } from '../interfaces/user';

@Pipe({
  name: 'filtroNome',
})
export class FiltroNomePipe implements PipeTransform {
  transform(users: IUser[] = [], filtro: string = ''): IUser[]{
    if(!filtro) return users;
    const alvo = filtro.toLowerCase();
    return users.filter(u => u.customerName.toLowerCase().includes(alvo));
  }
}

import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'status',
  pure: true, // Já vem por padrão -> Pure: significa que sempre que o valor mudar, o pipe vai ser disparado
})
export class StatusPipe implements PipeTransform {
  transform(userStatus: number): string {
    console.log('Status pipe');

    const status: { [key: string]: string } = {
      1: 'Ativo',
      2: 'Inativo',
    };
    return status[userStatus];
  }
}

import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'status',
  pure: false
})
export class StatusPipe implements PipeTransform {
  counter = 0;
  transform(userStatus: number): string {
    // Toda vez que eu quiser manipular um elemento entre os pipes, vou ter que deixar o pipe impuro para manipular
    this.counter += 1;
    console.log('StatusPipe counter', this.counter);
    try {
      if (!(userStatus == 1 || userStatus == 2)) {
        throw new Error('Ocorreu um erro.');
      }
      const status: { [key: string]: string } = {
        1: 'Ativo',
        2: 'Inativo',
      };
      return status[userStatus];
    } catch (error) {
      return 'Status Inválido';
    }
  }
}

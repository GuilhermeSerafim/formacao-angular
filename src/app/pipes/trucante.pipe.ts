import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'trucante',
})
export class TrucantePipe implements PipeTransform {
  transform(str: string, maxLength: number): string {
    if(!str) return '';
    else if (str.length > maxLength) return str.substring(0, maxLength) + '...';
    else return str;
  }
}

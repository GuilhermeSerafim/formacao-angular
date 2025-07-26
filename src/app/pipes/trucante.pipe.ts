import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'trucante',
})
export class TrucantePipe implements PipeTransform {
  transform(str: string, maxLength: number): string {
    const VALUE_LESS_THAN_MAX_LENGTH = str.length <= maxLength;
    if(!str) return '';
    else if (VALUE_LESS_THAN_MAX_LENGTH) return str.substring(0, maxLength) + '...';
    else return str;
  }
}

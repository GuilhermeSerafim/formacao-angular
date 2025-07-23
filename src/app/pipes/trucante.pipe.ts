import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'trucante',
})
export class TrucantePipe implements PipeTransform {
  transform(str: string): string {
    if (str.length > 5) return str.substring(0, 5) + '...';
    else return str;
  }
}

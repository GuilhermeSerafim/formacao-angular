import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'userStatusImage',
})
export class UserStatusImagePipe implements PipeTransform {
  transform(userStatus: number): string {
    const statusImage: { [key: number]: string } = {
      1: 'icons/active-icon.png',
      2: 'icons/inactive-icon.png',
    };
    return statusImage[userStatus];
  }
}

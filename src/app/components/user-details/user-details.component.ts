import { Component, Input } from '@angular/core';
import { IUser } from '../../interfaces/user/user.interface';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrl: './user-details.component.scss'
})
export class UserDetailsComponent {
  // Declarando obj undefined
  // Casting
  @Input({ required: true }) user: IUser = {} as IUser; // + usado
  // Partial
  @Input() user2: Partial<IUser> = {}
  // Ou instanciamos a interface em uma classe - porém é mais robusto e demorado - Mas na minha opinião é melhor pra aplicações escalaveis


}

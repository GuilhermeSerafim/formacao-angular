import {
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { GenresListResponse } from '../../types/genres-list-response';
import { StateListResponse } from '../../types/states-list-response';
import { IUser } from '../../interfaces/iuser';

// 📌 Ordem Simplificada dos Hooks
// constructor → a classe do componente é criada.
// ngOnChanges → chamado se houver @Input() com dados vindos do pai. Pode rodar várias vezes.
// ngOnInit → chamado uma vez, logo após a primeira mudança de @Input.
// ngDoCheck → detecção manual de mudanças.
// ngAfterContentInit → conteúdo projetado (ng-content) foi inicializado.
// ngAfterContentChecked → conteúdo projetado foi verificado.
// ngAfterViewInit → o template e as views filhas já foram renderizados (DOM pronto).
// ngAfterViewChecked → verificação final após renderização da view.

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrl: './user-form.component.scss',
})
export class UserFormComponent implements OnChanges {
  @Input() genresList: GenresListResponse = [];
  @Input() statesList: StateListResponse = [];
  @Input() userSelected: IUser = {} as IUser;
  
  // Sempre que os valores do input mudarem
  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes);
    
  }
}

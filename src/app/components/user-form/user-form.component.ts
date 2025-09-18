import {
  Component,
  Input,
  OnChanges,
  OnInit,
  QueryList,
  SimpleChanges,
  ViewChildren,
} from '@angular/core';
import { GenresListResponse } from '../../types/genres-list-response';
import { StateListResponse } from '../../types/states-list-response';
import { IUser } from '../../interfaces/iuser';
import { NgModel } from '@angular/forms';

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
  @ViewChildren(NgModel) controls!: QueryList<NgModel>;

  // Força revalidação sempre que o @Input userSelected mudar.
  // Quando o form é preenchido por binding ([(ngModel)]) e não por digitação,
  // os controles continuam em estado 'pristine' e 'untouched' (sem interação do usuário).
  // O Angular Material só exibe <mat-error> quando o controle está inválido E (dirty | touched | form submitted).
  // Por isso:
  // 1) updateValueAndValidity() roda os validadores imediatamente com os novos valores,
  //    inclusive nos campos com updateOn:'blur'.
  // 2) markAsTouched() tira o controle de 'untouched', liberando a exibição dos erros
  //    sem exigir blur/digitação.
  ngOnChanges(changes: SimpleChanges): void {
    if (changes['userSelected'] && this.controls) {
      this.controls.forEach((c) => {
        c.control.updateValueAndValidity();
        c.control.markAsTouched(); // opcional: já mostra o erro visual
      });
    }
  }
}

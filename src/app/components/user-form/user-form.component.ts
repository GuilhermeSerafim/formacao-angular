import {
  Component,
  ElementRef,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
  QueryList,
  SimpleChanges,
  ViewChildren,
} from '@angular/core';
import { GenresListResponse } from '../../types/genres-list-response';
import { StateListResponse } from '../../types/states-list-response';
import { IUser } from '../../interfaces/iuser';
import { NgForm, NgModel } from '@angular/forms';
import { getPasswordStrengthValue } from '../../../utils/get-password-strength-value';
import { convertPtBrDateToDateObj } from '../../../utils/convert-pt-br-date-obj';
import { MatDatepickerInputEvent } from '@angular/material/datepicker';
import { convertDateObjToPtBrDate } from '../../../utils/convert-date-obj-to-pt-br-date';
import { IGenre } from '../../interfaces/igenre';

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
export class UserFormComponent implements OnChanges, OnInit {
  passwordStrengthValue = 0;
  minDate: Date | null = null;
  maxDate: Date | null = null;
  dateValue: Date | null = null;
  displayedColumns: string[] = ['title', 'band', 'genre', 'favorite'];
  filteredGenresList: GenresListResponse = [];

  @Input() genresList: GenresListResponse = [];
  @Input() statesList: StateListResponse = [];
  @Input() userSelected: IUser = {} as IUser;
  @ViewChildren(NgModel) controls!: QueryList<NgModel>;

  @Output('onFormSubmit') onFormSubmitEmitt = new EventEmitter<void>();

  constructor(private readonly _el: ElementRef) {}

  ngOnInit(): void {
    this.setMinAndMaxDate();
  }

  ngOnChanges(changes: SimpleChanges): void {
    const userChanged = changes['userSelected'];

    if (userChanged && this.controls) {
      this.recalculateValidatorFor('senha');
      this.onPasswordChange(this.userSelected.password);
      this.setBirthDateToDatePicker();
      this.filteredGenresList = this.genresList;
    }
  }

  recalculateAllValidators() {
    this.controls.forEach((c) => {
      c.control.updateValueAndValidity(); // Recalcula validadores
      c.control.markAsTouched(); // Marca como "tocado" (mat-error)
    });
  }

  recalculateValidatorFor(controlNameParam: string) {
    const control = this.controls.find((c) => c.name === controlNameParam);
    if (control) {
      control.control.updateValueAndValidity();
      control.control.markAsTouched();
    }
  }

  onPasswordChange(password: any) {
    this.passwordStrengthValue = getPasswordStrengthValue(password);
  }

  onDateChange(event: MatDatepickerInputEvent<any, any>) {
    if (!event.value) return;
    this.userSelected.birthDate = convertDateObjToPtBrDate(event.value);
  }

  displayFn(genreId: number) {
    const genreFound = this.genresList.find((genre) => genre.id === genreId);
    return genreFound ? genreFound.description : '';
  }

  filterGenres(text: string) {
    // O autocomplete às vezes envia o ID (número) em vez da descrição.
    // Se for número, retorna direto para evitar erro no acesso de propriedades.
    if (typeof text == 'number') return;
    const searchTerm = text.trim().toLowerCase();
    this.filteredGenresList = this.genresList.filter((genre) =>
      genre.description.trim().toLowerCase().includes(searchTerm)
    );
  }

  isAnyCheckboxChecked(): boolean {
    return this.userSelected.musics.some((m) => m.isFavorite);
  }

  onFormSubmit(form: NgForm) {
    if (form.invalid) {
      this.focusOnInvalidControl(form);
      return;
    }
    this.onFormSubmitEmitt.emit();
  }

  focusOnInvalidControl(form: NgForm) {
    for (const control of Object.keys(form.controls)) {
      if (form.controls[control].invalid) {
        const invalidControl: HTMLElement =
          this._el.nativeElement.querySelector(`[name=${control}]`);
        invalidControl.focus();
        break;
      }
    }
  }

  private setMinAndMaxDate() {
    this.minDate = new Date(new Date().getFullYear() - 100, 0, 1);
    this.maxDate = new Date();
  }

  private setBirthDateToDatePicker() {
    this.dateValue = convertPtBrDateToDateObj(this.userSelected.birthDate);
  }
}

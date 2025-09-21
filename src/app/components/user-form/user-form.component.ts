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
import { getPasswordStrengthValue } from '../../../utils/get-password-strength-value';
import { convertPtBrDateToDateObj } from '../../../utils/convert-pt-br-date-obj';
import { MatDatepickerInputEvent } from '@angular/material/datepicker';
import { convertDateObjToPtBrDate } from '../../../utils/convert-date-obj-to-pt-br-date';

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

  @Input() genresList: GenresListResponse = [];
  @Input() statesList: StateListResponse = [];
  @Input() userSelected: IUser = {} as IUser;
  @ViewChildren(NgModel) controls!: QueryList<NgModel>;

  ngOnInit(): void {
    this.setMinAndMaxDate();
  }

  ngOnChanges(changes: SimpleChanges): void {
    const userChanged = changes['userSelected'];

    if (userChanged && this.controls) {
      this.recalculateValidatorFor('senha');
      this.onPasswordChange(this.userSelected.password);
      this.setBirthDateToDatePicker();
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



  private setMinAndMaxDate() {
    this.minDate = new Date(new Date().getFullYear() - 100, 0, 1);
    this.maxDate = new Date();
  }

  private setBirthDateToDatePicker() {
    this.dateValue = convertPtBrDateToDateObj(this.userSelected.birthDate);
  }
}

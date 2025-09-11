import { Component } from '@angular/core';
import { ControlContainer, NgForm } from '@angular/forms';

@Component({
  selector: 'app-form-user',
  templateUrl: './form-user.component.html',
  styleUrl: './form-user.component.scss',
  // viewProviders é parecido com providers, mas só vale para o template interno do componente (não para injetar em quem está fora).viewProviders é parecido com providers, mas só vale para o template interno do componente (não para injetar em quem está fora).
  // viewProviders: [{ provide: ControlContainer, useExisting: NgForm }] garante que os inputs do componente continuem ligados ao mesmo NgForm pai, permitindo validação, estado (touched, dirty, etc.) e submissão centralizada.
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }],
})
export class FormUserComponent {}

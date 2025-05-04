import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrl: './person.component.scss'
})
export class PersonComponent {
  @Input({required: true}) personName: string = "";
  @Input({required: true}) personAge: string = "";
  @Input({required: true}) personIndex: number = 0;
  @Input({required: true}) isFirst: boolean = false;
  @Input({required: true}) isLast: boolean = false;
  @Input({required: true}) isOdd: boolean = false;
  @Input({required: true}) isSelected: boolean = false;

  @Output() onPersonSelectEmitt = new EventEmitter<number>();

  // Sempre que click emito o evento para o comp pai
  selectPerson() {
    console.log(this.personIndex)
    this.onPersonSelectEmitt.emit(this.personIndex);
  }
  
}

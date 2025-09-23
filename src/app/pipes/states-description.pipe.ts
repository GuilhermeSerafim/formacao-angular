import { Pipe, PipeTransform } from '@angular/core';
import { BrazilianStateService } from '../services/brazilian-state.service';

@Pipe({
  name: 'statesDescription',
})
export class StatesDescriptionPipe implements PipeTransform {
  constructor(
    private readonly _brazilianStatesServices: BrazilianStateService
  ) {}
  transform(stateId: number): string {
    return this._brazilianStatesServices.getStateDescription(stateId);
  }
}

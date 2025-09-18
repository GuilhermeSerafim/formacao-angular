import { NgModule } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';

@NgModule({
  imports: [MatCardModule, MatFormFieldModule, MatInputModule],
  exports: [MatCardModule, MatFormFieldModule, MatInputModule],
})
export class AngularMaterialModule {}

import { NgModule } from '@angular/core';
import { GenreDescriptionPipe } from './genre-description.pipe';
import { StatesDescriptionPipe } from './states-description.pipe';

@NgModule({
  declarations: [GenreDescriptionPipe, StatesDescriptionPipe],
  exports: [GenreDescriptionPipe, StatesDescriptionPipe],
})
export class PipesModule {}

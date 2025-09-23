import { NgModule } from '@angular/core';
import { GenreDescriptionPipe } from './genre-description.pipe';
import { StatesDescriptionPipe } from './states-description.pipe';
import { IsFavoriteDescriptionPipe } from './is-favorite-description.pipe';

@NgModule({
  declarations: [GenreDescriptionPipe, StatesDescriptionPipe, IsFavoriteDescriptionPipe],
  exports: [GenreDescriptionPipe, StatesDescriptionPipe, IsFavoriteDescriptionPipe],
})
export class PipesModule {}

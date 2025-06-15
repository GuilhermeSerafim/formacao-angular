import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { CardComponent } from './components/card/card.component';
import { CardTextTitleDirective } from './components/card/directives/texts/card-text-title.directive';
import { CardHeaderDirective } from './components/card/directives/base/card-header.directive';
import { CardContentDirective } from './components/card/directives/base/card-content.directive';
import { CardDescriptionTextDirective } from './components/card/directives/texts/card-description-text.directive';
import { CardMainTextDirective } from './components/card/directives/texts/card-main-text.directive';
import { CardSmallImageDirective } from './components/card/directives/images/card-small-image.directive';
import { CardLargeImageDirective } from './components/card/directives/images/card-large-image.directive';

@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    CardTextTitleDirective,
    CardHeaderDirective,
    CardContentDirective,
    CardDescriptionTextDirective,
    CardMainTextDirective,
    CardSmallImageDirective,
    CardLargeImageDirective
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule
  ],
  providers: [
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

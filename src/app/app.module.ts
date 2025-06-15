import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { CardComponent } from './components/card/card.component';
import { CardTextTitleDirective } from './directives/card-text-title.directive';
import { CardHeaderDirective } from './components/card/directives/card-header.directive';
import { CardContentDirective } from './components/card/directives/card-content.directive';

@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    CardTextTitleDirective,
    CardHeaderDirective,
    CardContentDirective,
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

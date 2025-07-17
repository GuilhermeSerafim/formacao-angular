import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { MeuCompComponent } from './components/meu-comp/meu-comp.component';
import { CardComponent } from './components/card/card.component';
import { CardTemplateContentComponent } from './components/card-template-content/card-template-content.component';
@NgModule({
  declarations: [
    AppComponent,
    MeuCompComponent,
    CardComponent,
    CardTemplateContentComponent
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

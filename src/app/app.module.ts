import { BrowserModule } from '@angular/platform-browser';

import { DEFAULT_CURRENCY_CODE, LOCALE_ID, NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { registerLocaleData } from '@angular/common';
import localePt from '@angular/common/locales/pt';

import { provideHttpClient } from '@angular/common/http';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { ComponentsModule } from './components/components.module';

registerLocaleData(localePt, 'pt-BR');

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, ComponentsModule],
  providers: [
    { provide: LOCALE_ID, useValue: 'pt-BR' },
    { provide: DEFAULT_CURRENCY_CODE, useValue: 'BRL' },
    provideHttpClient(),
    provideAnimationsAsync(),
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}

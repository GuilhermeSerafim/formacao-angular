import { DEFAULT_CURRENCY_CODE, LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { DATE_PIPE_DEFAULT_OPTIONS, registerLocaleData } from '@angular/common';
import localePt from '@angular/common/locales/pt';
import { provideHttpClient } from '@angular/common/http';
import { TextareaComponent } from './textarea/textarea.component';
import { InputTextComponent } from './input-text/input-text.component';
import { SelectComponent } from './select/select.component';
import { RadioButtonComponent } from './radio-button/radio-button.component';
import { CheckboxComponent } from './checkbox/checkbox.component';

// Carregando formatações brasileiras no injection token (LOCALE_ID) -> DatePipe, I18nPluralPipe, CurrencyPipe, DecimalPipe and PercentPipe
registerLocaleData(localePt, 'pt-BR');

@NgModule({
  declarations: [
    AppComponent,
    TextareaComponent,
    InputTextComponent,
    SelectComponent,
    RadioButtonComponent,
    CheckboxComponent
  ],
  imports: [BrowserModule, BrowserAnimationsModule, FormsModule],
  providers: [
    provideAnimationsAsync(),
    provideHttpClient(),
    //	Define o padrão de formatação de datas
    {
      provide: DATE_PIPE_DEFAULT_OPTIONS,
      useValue: { dateFormat: "shortDate" },
    },
    // Define o idioma e localidade do app
    {
      provide: LOCALE_ID,
      useValue: 'pt-BR',
    },
    // Define a moeda padrão para formatação de valores
    { provide: DEFAULT_CURRENCY_CODE, useValue: 'BRL' },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}

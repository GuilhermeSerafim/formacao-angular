import { DEFAULT_CURRENCY_CODE, LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { UserStatusPipe } from './pipes/user-status.pipe';
import { TrucantePipe } from './pipes/trucante.pipe';
import { DATE_PIPE_DEFAULT_OPTIONS, registerLocaleData } from '@angular/common';
import localePt from '@angular/common/locales/pt';
import { ObsComObjetoComponent } from './components/obs-com-objeto/obs-com-objeto.component';
import { provideHttpClient } from '@angular/common/http';
import { ObsComArrayComponent } from './components/obs-com-array/obs-com-array.component';
import { StatusPipe } from './pipes/status.pipe';

// Carregando formatações brasileiras no injection token (LOCALE_ID) -> DatePipe, I18nPluralPipe, CurrencyPipe, DecimalPipe and PercentPipe
registerLocaleData(localePt, 'pt-BR');

@NgModule({
  declarations: [
    AppComponent,
    UserStatusPipe,
    TrucantePipe,
    ObsComObjetoComponent,
    ObsComArrayComponent,
    StatusPipe,
  ],
  imports: [BrowserModule, BrowserAnimationsModule, FormsModule],
  providers: [
    provideAnimationsAsync(),
    provideHttpClient(),
    //	Define o padrão de formatação de datas
    {
      provide: DATE_PIPE_DEFAULT_OPTIONS,
      useValue: { dateFormat: "'Data: 'dd/MM/YYYY", timezone: '+0000' },
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

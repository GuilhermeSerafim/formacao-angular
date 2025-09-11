import { NgModule, LOCALE_ID, DEFAULT_CURRENCY_CODE } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { registerLocaleData } from '@angular/common';
import localePt from '@angular/common/locales/pt';

// Angular Material
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule }   from '@angular/material/card';
import { MatRippleModule } from '@angular/material/core';

// ⬇️ Escolha UMA das duas opções de animação:
// 1) Módulo tradicional
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormComponent } from './form/form.component';
import { NgModelGroupComponent } from './ng-model-group/ng-model-group.component';
// 2) OU (alternativa mais leve em projetos recentes)
// import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';

registerLocaleData(localePt, 'pt-BR');

@NgModule({
  declarations: [
    AppComponent,
    FormComponent,
    NgModelGroupComponent,
    // ... seus componentes
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule, // <- se usar esta, NÃO use provideAnimationsAsync no providers
    FormsModule,
    MatButtonModule,
    MatCardModule,
    MatRippleModule,
  ],
  providers: [
    // Se preferir a opção async, comente BrowserAnimationsModule acima
    // e descomente a linha abaixo:
    // provideAnimationsAsync(),

    { provide: LOCALE_ID, useValue: 'pt-BR' },
    { provide: DEFAULT_CURRENCY_CODE, useValue: 'BRL' },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}

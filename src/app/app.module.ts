import { NgModule, LOCALE_ID, DEFAULT_CURRENCY_CODE } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { registerLocaleData } from '@angular/common';
import localePt from '@angular/common/locales/pt';

// Angular Material
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatRippleModule } from '@angular/material/core';

// ⬇️ Escolha UMA das duas opções de animação:
// 1) Módulo tradicional
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormComponent } from './form/form.component';
import { NgModelGroupComponent } from './ng-model-group/ng-model-group.component';
import { FormUserComponent } from './form-user/form-user.component';
import { MainFormComponent } from './main-form/main-form.component';
import { FormProfessionComponent } from './form-profession/form-profession.component';
import { CustomValidatorFormEx1Component } from './custom-validators/synchronous/ex1/custom-validator-form-ex1/custom-validator-form-ex1.component';
import { InvalidTextValidatorDirective } from './directives/invalid-text-validator.directive';
import { CustomValidatorFormEx2Component } from './custom-validators/synchronous/ex2/custom-validator-form-ex2/custom-validator-form-ex2.component';
import { DepartmentQuantityValidatorDirective } from './directives/department-quantity-validator.directive';
import { provideHttpClient } from '@angular/common/http';
import { UserNameValidatorDirective } from './directives/user-name-validator.directive';
import { AsyncCustomValidatorFormComponent } from './custom-validators/asynchronous/async-custom-validator-form/async-custom-validator-form.component';
// 2) OU (alternativa mais leve em projetos recentes)
// import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';

registerLocaleData(localePt, 'pt-BR');

@NgModule({
  declarations: [
    AppComponent,
    FormComponent,
    NgModelGroupComponent,
    FormUserComponent,
    MainFormComponent,
    FormProfessionComponent,
    CustomValidatorFormEx1Component,
    InvalidTextValidatorDirective,
    CustomValidatorFormEx2Component,
    DepartmentQuantityValidatorDirective,
    UserNameValidatorDirective,
    AsyncCustomValidatorFormComponent,
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
    provideHttpClient(),
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}

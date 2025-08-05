import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { UserStatusPipe } from './pipes/user-status.pipe';
import { TrucantePipe } from './pipes/trucante.pipe';
import { DATE_PIPE_DEFAULT_OPTIONS } from '@angular/common';

@NgModule({
  declarations: [AppComponent, UserStatusPipe, TrucantePipe],
  imports: [BrowserModule, BrowserAnimationsModule, FormsModule],
  providers: [
    provideAnimationsAsync(),
    {
      provide: DATE_PIPE_DEFAULT_OPTIONS,
      useValue: { dateFormat: "'Data: 'dd/MM/YYYY", timezone: '+0000' },
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}

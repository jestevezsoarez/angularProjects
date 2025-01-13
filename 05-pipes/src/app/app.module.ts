import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';

// Modules
import { SharedModule } from './shared/shared.module';
import { AppRoutingModule } from 'src/app-routing.module';

// Locale Configuration
import LocaleUY from '@angular/common/locales/es-UY';
import { registerLocaleData } from '@angular/common';

registerLocaleData(LocaleUY);
// End Locale Configuration


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    SharedModule,
    BrowserAnimationsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

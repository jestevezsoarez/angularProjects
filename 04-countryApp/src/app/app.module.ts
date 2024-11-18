import { NgModule } from '@angular/core';
// Modules
import { BrowserModule } from '@angular/platform-browser';
import { SharedModule } from './shared/shared.module';
// Components
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    SharedModule // El modulo Shared se carga de forma tradicional, el modulo Country se cargara de forma perezoza.
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
// Para hacer peticiones http
import { HttpClientModule } from '@angular/common/http';

// Modulos
import { GifsModule } from './gifs/gifs.module';
import { SharedModule } from './shared/shared.module';

// Componentes
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    GifsModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

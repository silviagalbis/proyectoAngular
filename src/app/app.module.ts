import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { TituloComponent } from './titulo.component';
import { ManosComponent } from './components/manos.component/manos.component';
import { MarcadorComponent } from './components/marcador.component/marcador.component';
import { BotonesComponent } from './components/botones.component/botones.component';

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [
    AppComponent,
    TituloComponent,
    ManosComponent,
    MarcadorComponent,
    BotonesComponent,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './components/main/main.component';
import { BasicWepPageComponent } from './components/basic-wep-page/basic-wep-page.component';
import { AtributosElementoComponent } from './components/atributos-elemento/atributos-elemento.component';
import { LocalizadoresComponent } from './components/localizadores/localizadores.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    BasicWepPageComponent,
    AtributosElementoComponent,
    LocalizadoresComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

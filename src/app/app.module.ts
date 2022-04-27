import { routing } from "./app.routing";
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './component/header/header.component';
import { RedesComponent } from './component/redes/redes.component';
import { LoginComponent } from './login/login.component';
import { ImagenesComponent } from './component/imagenes/imagenes.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    RedesComponent,
    LoginComponent,
    ImagenesComponent
  ],
  imports: [
    BrowserModule,
    routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

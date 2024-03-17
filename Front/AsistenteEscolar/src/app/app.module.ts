import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from '../components/login/login.component';
import { MainPageComponent } from '../components/main-page/main-page.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ServiceCardComponent } from '../components/service-card/service-card.component';
import { AsistenteVirtualComponent } from 'src/components/asistente-virtual/asistente-virtual.component';
import { ChatPdfComponent } from 'src/components/chat-pdf/chat-pdf.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    MainPageComponent,
    ServiceCardComponent,
    AsistenteVirtualComponent,
    ChatPdfComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { BradingPageOneComponent } from './brading-page-one/brading-page-one.component';
import { MainComponent } from './main/main.component';
import { PoriMoniComponent } from './pori-moni/pori-moni.component';
import { FooterComponent } from './footer/footer.component';
import { HttpClientModule } from '@angular/common/http';
import { NadiaAfrinMinComponent } from './nadia-afrin-min/nadia-afrin-min.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BradingPageOneComponent,
    MainComponent,
    PoriMoniComponent,
    FooterComponent,
    NadiaAfrinMinComponent,
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

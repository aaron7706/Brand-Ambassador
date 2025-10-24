import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { BradingPageOneComponent } from './brading-page-one/brading-page-one.component';
import { MainComponent } from './main/main.component';
import { FooterComponent } from './footer/footer.component';
import { HttpClientModule } from '@angular/common/http';
import { NadiaAfrinMimComponent } from './nadia-afrin-mim/nadia-afrin-mim.component';
import { BradingPageTwoComponent } from './brading-page-two/brading-page-two.component';
import { BrandingPageThreeComponent } from './branding-page-three/branding-page-three.component';
import { BrandingPageFourComponent } from './branding-page-four/branding-page-four.component';
import { BrandingPageFiveComponent } from './branding-page-five/branding-page-five.component';
import { BrandingPageSixComponent } from './branding-page-six/branding-page-six.component';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BradingPageOneComponent,
    MainComponent,
    FooterComponent,
    NadiaAfrinMimComponent,
    BradingPageTwoComponent,
    BrandingPageThreeComponent,
    BrandingPageFourComponent,
    BrandingPageFiveComponent,
    BrandingPageSixComponent
  
  ],
  imports: [
    BrowserModule,
    RouterModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

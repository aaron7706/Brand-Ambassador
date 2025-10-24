import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BradingPageOneComponent } from './brading-page-one/brading-page-one.component';
import { MainComponent } from './main/main.component';
import { NadiaAfrinMimComponent } from './nadia-afrin-mim/nadia-afrin-mim.component';
import { BradingPageTwoComponent } from './brading-page-two/brading-page-two.component';
import { BrandingPageThreeComponent } from './branding-page-three/branding-page-three.component';
import { BrandingPageFourComponent } from './branding-page-four/branding-page-four.component';
import { BrandingPageFiveComponent } from './branding-page-five/branding-page-five.component';
import { BrandingPageSixComponent } from './branding-page-six/branding-page-six.component';


const routes: Routes = [
  { path: '', redirectTo: '', pathMatch: 'full' },
  {path: '', component: BradingPageOneComponent},
  {path: 'Peya-bipasha', component: BradingPageTwoComponent},
  {path: 'main', component: MainComponent},
  {path: 'nadia-afrin-mim', component: NadiaAfrinMimComponent},
  {path:'nirab-hossain', component: BrandingPageThreeComponent},
  {path:'maira-shanto', component:BrandingPageFourComponent},
  {path:'samonty-shoumi', component:BrandingPageFiveComponent},
  {path:'anika-kabir-shokh', component:BrandingPageSixComponent}
  
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash:true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }

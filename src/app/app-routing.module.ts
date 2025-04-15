import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BradingPageOneComponent } from './brading-page-one/brading-page-one.component';
import { MainComponent } from './main/main.component';
import { NadiaAfrinMinComponent } from './nadia-afrin-min/nadia-afrin-min.component';


const routes: Routes = [
  { path: '', redirectTo: '', pathMatch: 'full' },
  {path: '', component: BradingPageOneComponent},
  {path: 'main', component: MainComponent},
  {path:'nadia-afrin-min', component: NadiaAfrinMinComponent},
  
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash:true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }

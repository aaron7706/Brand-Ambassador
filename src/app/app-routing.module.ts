import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BradingPageOneComponent } from './brading-page-one/brading-page-one.component';
import { MainComponent } from './main/main.component';
import { NadiaAfrinMimComponent } from './nadia-afrin-mim/nadia-afrin-mim.component';


const routes: Routes = [
  { path: '', redirectTo: '', pathMatch: 'full' },
  {path: '', component: BradingPageOneComponent},
  {path: 'main', component: MainComponent},
  {path: 'nadia-afrin-mim', component: NadiaAfrinMimComponent}
  
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash:true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }

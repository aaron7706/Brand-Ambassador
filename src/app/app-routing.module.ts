import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BradingPageOneComponent } from './brading-page-one/brading-page-one.component';
import { MainComponent } from './main/main.component';
import { PoriMoniComponent } from './pori-moni/pori-moni.component';


const routes: Routes = [
  { path: '', redirectTo: '', pathMatch: 'full' },
  {path: '', component: BradingPageOneComponent},
  { path: 'pori-moni', component: PoriMoniComponent },
  {path: 'main', component: MainComponent},
  
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

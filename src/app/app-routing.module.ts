import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BradingPageOneComponent } from './brading-page-one/brading-page-one.component';


const routes: Routes = [
  { path: '', redirectTo: '', pathMatch: 'full' },
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ViewPageComponent } from './view-page/view-page.component';

const routes: Routes = [
  { path: '', component: ViewPageComponent },
  { path: 'home', component: ViewPageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

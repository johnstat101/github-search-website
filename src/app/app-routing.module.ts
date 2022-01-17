import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { SearchPageComponent } from './search-page/search-page.component';
import { DisplayReposComponent } from './display-repos/display-repos.component';

const routes: Routes = [
  { path: 'Home', component: SearchPageComponent},
  { path: 'repos', component: DisplayReposComponent},
  { path: '', component: SearchPageComponent},
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }

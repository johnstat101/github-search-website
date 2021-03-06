import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'

import { AppComponent } from './app.component';
import { SearchFormComponent } from './search-form/search-form.component';
import { SearchPageComponent } from './search-page/search-page.component';
import { DisplayReposComponent } from './display-repos/display-repos.component';
import { AppRoutingModule } from './app-routing.module';
import { UnderlineDirective } from './underline.directive';
import { DateCountPipe } from './date-count.pipe';

@NgModule({
  declarations: [
    AppComponent,
    SearchFormComponent,
    SearchPageComponent,
    DisplayReposComponent,
    UnderlineDirective,
    DateCountPipe,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

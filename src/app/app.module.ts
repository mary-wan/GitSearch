import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SearchFormComponent } from './search-form/search-form.component';
import { SearchDisplayComponent } from './search-display/search-display.component';
import { GitRoutingModule } from './git-routing.module';



@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SearchFormComponent,
    SearchDisplayComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    GitRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

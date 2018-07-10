import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { NavbarComponent } from './navbar.component';

@NgModule({
  declarations: [
    NavbarComponent
  ],
  imports: [
    BrowserModule
  ],
  exports: [
    NavbarComponent
  ],
  providers: [],
  bootstrap: [NavbarComponent]
})
export class LayoutModule { }

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LayoutModule } from '../layout/navbar/navbar.module';
import { FileDropModule } from 'ngx-file-drop';
import { DragAnDropComponent } from './drag-and-drop/drag-and-drop.component';

@NgModule({
  declarations: [
    AppComponent,
    DragAnDropComponent
  ],
  imports: [
    BrowserModule,
    LayoutModule,
    FileDropModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

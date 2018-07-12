import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LayoutModule } from '../layout/navbar/navbar.module';
import { FileDropModule } from 'ngx-file-drop';
import { DragAnDropComponent } from './drag-and-drop/drag-and-drop.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NguCarouselModule } from '@ngu/carousel';
import { CarouselComponent } from './carousel/carousel.component';


@NgModule({
  declarations: [
    AppComponent,
    DragAnDropComponent,
    DashboardComponent,
    CarouselComponent

  ],
  imports: [
    BrowserModule,
    LayoutModule,
    FileDropModule,
    NguCarouselModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

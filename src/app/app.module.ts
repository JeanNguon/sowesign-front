import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AdminFormComponent } from './admin-form/admin-form.component';
import { ConfirmationComponent } from './confirmation/confirmation.component';
import { RdsFormComponent } from './rds-form/rds-form.component';
import { SignataireFormComponent } from './signataire-form/signataire-form.component';
import { LayoutModule } from '../layout/navbar/navbar.module';
import { FileDropModule } from 'ngx-file-drop';
import { DragAnDropComponent } from './drag-and-drop/drag-and-drop.component';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    DragAnDropComponent,
    AdminFormComponent,
    RdsFormComponent,
    SignataireFormComponent,
    ConfirmationComponent
  ],
  imports: [
    BrowserModule,
    LayoutModule,
    FileDropModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

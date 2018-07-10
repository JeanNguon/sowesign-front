import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AdminFormComponent } from './admin-form/admin-form.component';
import { RdsFormComponent } from './rds-form/rds-form.component';
import { SignataireFormComponent } from './signataire-form/signataire-form.component';
import { LayoutModule } from '../layout/navbar/navbar.module';

@NgModule({
  declarations: [
    AppComponent,
    AdminFormComponent,
    RdsFormComponent,
    SignataireFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    LayoutModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

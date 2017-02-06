import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { MaterializeModule } from 'angular2-materialize';

import { AppComponent } from './app.component';
import { DashboardComponent} from './dashboard.component';
import { PaymentComponent } from './payment.component';
import { RefundComponent } from './refund.component';
import { SettingsComponent } from './settings.component';
import { NotesComponent } from './notes.component';
import { ReminderComponent } from './reminder.component';

import { AppRoutingModule }     from './app-routing.module';


@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    PaymentComponent,
    RefundComponent,
    SettingsComponent,
    NotesComponent,
    ReminderComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MaterializeModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }

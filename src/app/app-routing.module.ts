import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router'

import { DashboardComponent } from './dashboard.component';
import { PaymentComponent } from './payment.component';
import { RefundComponent } from './refund.component';
import { SettingsComponent } from './settings.component';
import { NotesComponent } from './notes.component';
import { ReminderComponent } from './reminder.component';

const routes: Routes = [
    { 
        path: '',
        redirectTo: '/dashboard',
        pathMatch: 'full' 
    },
    { 
        path: 'dashboard', 
        component: DashboardComponent
    },
    { 
        path: 'payment', 
        component: PaymentComponent
    },
    { 
        path: 'refund', 
        component: RefundComponent
    },
    { 
        path: 'settings', 
        component: SettingsComponent
    },
    { 
        path: 'notes', 
        component: NotesComponent
    },
    { 
        path: 'reminder', 
        component: ReminderComponent
    }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})

export class AppRoutingModule{}
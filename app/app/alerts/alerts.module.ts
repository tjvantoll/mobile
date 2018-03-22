import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { NativeScriptCommonModule } from 'nativescript-angular/common';
import { AlertsComponent } from './alerts/alerts.component';
import { AlertDetailsComponent } from './alert-details/alert-details.component';

@NgModule({
  imports: [
    NativeScriptCommonModule
  ],
  declarations: [
    AlertsComponent,
    AlertDetailsComponent
  ],
  schemas: [NO_ERRORS_SCHEMA]
})
export class AlertsModule { }

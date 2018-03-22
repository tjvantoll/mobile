import { NgModule, NgModuleFactoryLoader, NO_ERRORS_SCHEMA } from '@angular/core';
import { NativeScriptModule } from 'nativescript-angular/nativescript.module';
import { NativeScriptFormsModule } from 'nativescript-angular/forms';
import { NativeScriptHttpClientModule }	from 'nativescript-angular/http-client';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { LoggedInLazyLoadGuard } from './logged-in-lazy-load.guard';
import { KinveyService } from './app/kinvey.service';
import { OrdersModule } from './app/orders/orders.module';
import { AlertsModule } from './app/alerts/alerts.module';
import { EquipmentModule } from './app/equipment/equipment.module';
import { ProfileModule } from './app/profile/profile.module';


@NgModule({
    bootstrap: [
        AppComponent
    ],
    imports: [
        NativeScriptModule,
        AppRoutingModule,
        NativeScriptFormsModule,
        NativeScriptHttpClientModule,

        OrdersModule,
        AlertsModule,
        EquipmentModule,
        ProfileModule
    ],
    declarations: [
        AppComponent
    ],
    providers: [
        LoggedInLazyLoadGuard,
        KinveyService
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class AppModule { }

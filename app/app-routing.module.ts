import { NgModule } from '@angular/core';
import { Routes } from '@angular/router';
import { NativeScriptRouterModule } from 'nativescript-angular/router';
import { LoggedInLazyLoadGuard } from './logged-in-lazy-load.guard';

import { OrdersComponent } from './app/orders/orders/orders.component';
import { OrderDetailsComponent } from './app/orders/order-details/order-details.component';
import { AlertsComponent } from './app/alerts/alerts/alerts.component';
import { AlertDetailsComponent } from './app/alerts/alert-details/alert-details.component';
import { EquipmentComponent } from './app/equipment/equipment/equipment.component';
import { EquipmentDetailsComponent } from './app/equipment/equipment-details/equipment-details.component';
import { ProfileComponent } from './app/profile/profile/profile.component';

const routes: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'login', loadChildren: './app/login/login.module#LoginModule' },
    { path: 'home', loadChildren: './app/home/home.module#HomeModule', canLoad: [LoggedInLazyLoadGuard] },
    
    { path: 'orders', component: OrdersComponent, canLoad: [LoggedInLazyLoadGuard] },
    { path: 'order/:id', component: OrderDetailsComponent, canLoad: [LoggedInLazyLoadGuard] },
    
    { path: 'alerts', component: AlertsComponent, canLoad: [LoggedInLazyLoadGuard] },
    { path: 'alert/:id', component: AlertDetailsComponent, canLoad: [LoggedInLazyLoadGuard] },
    
    { path: 'equipment', component: EquipmentComponent, canLoad: [LoggedInLazyLoadGuard] },
    { path: 'equipment/:id', component: EquipmentDetailsComponent, canLoad: [LoggedInLazyLoadGuard] },
    
    { path: 'profile', component: ProfileComponent, canLoad: [LoggedInLazyLoadGuard] },
];

@NgModule({
    imports: [NativeScriptRouterModule.forRoot(routes)],
    exports: [NativeScriptRouterModule]
})
export class AppRoutingModule { }

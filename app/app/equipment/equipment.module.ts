import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { NativeScriptCommonModule } from 'nativescript-angular/common';
import { EquipmentComponent } from './equipment/equipment.component';
import { EquipmentDetailsComponent } from './equipment-details/equipment-details.component';

@NgModule({
  imports: [
    NativeScriptCommonModule
  ],
  declarations: [
    EquipmentComponent,
    EquipmentDetailsComponent
  ],
  schemas: [NO_ERRORS_SCHEMA]
})
export class EquipmentModule { }

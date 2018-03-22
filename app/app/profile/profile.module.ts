import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { NativeScriptCommonModule } from 'nativescript-angular/common';
import { ProfileComponent } from './profile/profile.component';

@NgModule({
  imports: [
    NativeScriptCommonModule
  ],
  declarations: [ProfileComponent],
  schemas: [NO_ERRORS_SCHEMA]
})
export class ProfileModule { }

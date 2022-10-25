import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import {DockModule} from 'primeng/dock';
import { LandpageComponent } from './components/landpage/landpage.component';

export const customModules: any[] = [
  // insert here common modules
  CommonModule,
  FormsModule,
  ReactiveFormsModule,
  DockModule
];

export const customComponents: any[] = [
  // insert here common components
  // landpage is in shared folder but doesnt need to be used globally
];

@NgModule({
  declarations: [customComponents],
  imports: [customModules],
  exports: [customModules],
})
export class SharedModule {}

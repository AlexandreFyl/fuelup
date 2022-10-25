import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

export const customModules: any[] = [
  // insert here common modules
  CommonModule,
  FormsModule,
  ReactiveFormsModule,
];

export const customComponents: any[] = [
  // insert here common components
];

@NgModule({
  declarations: [customComponents],
  imports: [customModules],
  exports: [customModules],
})
export class SharedModule {}

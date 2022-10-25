import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@shared/shared.module';
import { ContainerComponent } from './container.component';



@NgModule({
  declarations: [ContainerComponent],
  imports: [
    CommonModule,
    SharedModule
  ]
})
export class ContainerModule { }

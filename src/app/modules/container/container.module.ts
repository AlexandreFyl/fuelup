import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@shared/shared.module';
import { ContainerComponent } from './container.component';
import { ContainerRoutingModule } from './container-routing.module';
import { TestComponent } from './components/test/test.component';



@NgModule({
  declarations: [ContainerComponent,
  TestComponent],
  imports: [
    CommonModule,
    ContainerRoutingModule,
    SharedModule
  ]
})
export class ContainerModule { }

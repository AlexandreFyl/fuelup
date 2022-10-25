import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TestComponent } from './components/test/test.component';
import { ContainerComponent } from './container.component';

const routes: Routes = [
  {path: '', component: ContainerComponent, children: [
    {
      path: '', component : TestComponent
    },
  ]},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ContainerRoutingModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandpageComponent } from '@shared/components/landpage/landpage.component';
import { AppComponent } from './app.component';

const routes: Routes = [
  {path: '', component: LandpageComponent},
  {
    path: 'home',
    loadChildren: () => import('@container/container.module').then(module => module.ContainerModule)
  }
];

// "{ enableTracing: true } " is for debug purpose for lazy loading

@NgModule({
  imports: [RouterModule.forRoot(routes) ],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RankingComponent } from './ranking.component';
import { SharedModule } from '@shared/shared.module';
import { RankingRoutingModule } from './ranking-routing.module';
import {TableModule} from 'primeng/table';


@NgModule({
  declarations: [
    RankingComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    RankingRoutingModule,
    TableModule
  ]
})
export class RankingModule { }

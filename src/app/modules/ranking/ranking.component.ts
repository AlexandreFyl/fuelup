import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ApiRecordService } from '@core/services/api-record.service';
import { environment } from '@env';
import { LazyLoadEvent, PrimeNGConfig } from 'primeng/api';
import { ApiRecord, Fields, Record } from './models/api-record';

@Component({
  selector: 'app-ranking',
  templateUrl: './ranking.component.html',
  styleUrls: ['./ranking.component.scss'],
})
export class RankingComponent implements OnInit {

  records!: Record[];

  totalRecords!: number;

  cols!: any[];

  loading!: boolean;

  fields!: Fields[];

  constructor(private http: HttpClient, private apiRecordService: ApiRecordService,  private primengConfig: PrimeNGConfig) {}

  ngOnInit(): void {
    // TODO : rajouter placeholders
    this.fields = [];
    this.loading = true;
    this.primengConfig.ripple = true;
  }

  setApiRecord(event: LazyLoadEvent) {
    this.loading = true;
    console.log("event sort",event.sortOrder);
    console.log("event sort", event.sortField );
    console.log("event.first", event.first);
    console.log("event.rows", event.rows);
    setTimeout(() => {
      this.apiRecordService.getApiRecord(event.sortOrder, event.sortField, event.first, event.rows).subscribe((res) => {
        this.totalRecords = res.nhits;
        this.records = res.records;
        console.log(this.records);
        this.fields = [];
        res.records.forEach((element) => {
          this.fields.push(element.fields);
        });
        console.log(this.fields);
        this.loading = false;
      });
  }, 1000);


  }

}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '@env';
import { ApiRecord } from '@ranking/models/api-record';

@Injectable()
export class ApiRecordService {
  baseUrl: string = environment.baseApiUrl;

  constructor(private http: HttpClient) {}

  getApiRecord(
    sortDirection: number | undefined,
    sortParam: string | undefined,
    eventFirst : number | undefined,
    eventRows : number | undefined
  ) {
    let urlToRequest = this.baseUrl;
    if (sortParam != undefined) {
      urlToRequest = this.buildRequest(sortDirection, sortParam, eventFirst, eventRows);
    }
    return this.http.get<ApiRecord>(urlToRequest);
  }

  buildRequest(
    sortDirection: number | undefined,
    sortParam: string | undefined,
    eventFirst : number | undefined,
    eventRows : number | undefined
  ): string{
    // sorting purpose
      let urlToRequest = this.baseUrl + "&sort="
      if(sortDirection == 1) {
        urlToRequest += "-";
      }
      urlToRequest += sortParam;
      // pagination purpose
      if(eventFirst!= 0) {
        urlToRequest += "&start=" + eventFirst;
      }
      // number of lines returned
      urlToRequest += "&rows=" + eventRows;
      return urlToRequest;
  }
}

import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

import { columns } from '../classes/columns';

// @Injectable()

@Injectable({
    providedIn: 'root'
  })

export class apiservice{
    private jsonUrl = ('assets/tasklist.json');;

    // constructor(private httpclient : HttpClient){}
    constructor(private http: HttpClient) {}

    //getcolumns(): Observable<any>{
        //return this.httpclient.post("https://localhost:44362/Lead/GetLead")
    //}

    // getcolumns(leaddata:columns): Observable<any>{
    //     return this.httpclient.post("https://localhost:44362/Lead/GetLead",leaddata)
    // }

    getData(): Observable<any[]> {
        return this.http.get<any[]>(this.jsonUrl);
      }
}
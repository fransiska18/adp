import {Injectable} from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

import { columns } from '../classes/columns';

@Injectable()
export class apiservice{

    constructor(private httpclient : HttpClient){}

    //getcolumns(): Observable<any>{
        //return this.httpclient.post("https://localhost:44362/Lead/GetLead")
    //}

    getcolumns(leaddata:columns): Observable<any>{
        return this.httpclient.post("https://localhost:44362/Lead/GetLead",leaddata)
    }
}
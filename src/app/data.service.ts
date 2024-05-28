import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private apiUrl = 'http://localhost:3000';

  constructor(private http: HttpClient) {}

  // Method to fetch the JSON file from the backend
  getJson(file_json: string): Observable<any> {
    const params = new HttpParams().set('file_json', file_json);
    return this.http.get(`${this.apiUrl}/get-json`, { params });
  }

  // Method to update the JSON file on the backend
  updateJson(file_json: string, data: any, item_id:any, satus_tasklist:any): Observable<any> {
    return this.http.post(`${this.apiUrl}/update-json`, { file_json, data,item_id,satus_tasklist });
  }
}

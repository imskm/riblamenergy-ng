import { Injectable, isDevMode } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';

const PROD_API_ENDPOINT = "http://office.riblamenergy.com";
const DEV_API_ENDPOINT = "http://riblamenergy";

@Injectable({
  providedIn: 'root'
})
export class HttpRequestService {

  
  baseUri = "";

  constructor(private http: HttpClient) {
  	if (isDevMode()) {
  		this.baseUri = DEV_API_ENDPOINT;
  	} else {
  		this.baseUri = PROD_API_ENDPOINT;
  	}
  }

  get(uri: string): Observable<any> {
  	return this.http.get(`${this.baseUri}/${uri}`);
  }

  post(uri: string, data: Object): Observable<any> {
  	return this.http.post(`${this.baseUri}/${uri}`, data);
  }

  patch(uri: string, data: Object): Observable<any> {
  	return this.http.patch(`${this.baseUri}/${uri}`, data);
  }

  delete(uri: string): Observable<any> {
  	return this.http.delete(`${this.baseUri}/${uri}`);
  }
}

import { Injectable, isDevMode } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

import { MessageService } from './message.service';

const PROD_API_ENDPOINT = "http://office.riblamenergy.com";
const DEV_API_ENDPOINT = "http://riblamenergy";

@Injectable({
  providedIn: 'root'
})
export class HttpRequestService {

  
  baseUri = "";

  constructor(
    private http: HttpClient,
    private messageService: MessageService
  ) {
  	if (isDevMode()) {
  		this.baseUri = DEV_API_ENDPOINT;
  	} else {
  		this.baseUri = PROD_API_ENDPOINT;
  	}
  }

  get(uri: string): Observable<any> {
  	return this.http.get(`${this.baseUri}/${uri}`)
      .pipe(
        catchError((error: HttpErrorResponse) => {
          return this.handleError(error);
        })
      );
  }

  post(uri: string, data: Object): Observable<any> {
  	return this.http.post(`${this.baseUri}/${uri}`, data)
      .pipe(
        catchError((error: HttpErrorResponse) => {
          return this.handleError(error);
        })
      );
  }

  patch(uri: string, data: Object): Observable<any> {
  	return this.http.patch(`${this.baseUri}/${uri}`, data)
      .pipe(
          catchError((error: HttpErrorResponse) => {
          return this.handleError(error);
        })
      );
  }

  delete(uri: string): Observable<any> {
  	return this.http.delete(`${this.baseUri}/${uri}`)
      .pipe(
          catchError((error: HttpErrorResponse) => {
          return this.handleError(error);
        })
      );
  }

  handleError(error: HttpErrorResponse) {
    if (error.error.message.length) {
      this.messageService.set(error.error.message, false);
    }
    this.messageService.setError(error.error.errors);

    return throwError(error);
  }
}

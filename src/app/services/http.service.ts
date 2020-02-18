import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';

import { catchError, retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  // TODO: load from env
  private REST_API_SERVER = 'https://dimo-wildwolves.herokuapp.com';
  // private REST_API_SERVER = "http://localhost:3000";

  constructor(private httpClient: HttpClient) {}

  handleError(error: HttpErrorResponse) {
    let errorMessage = 'Unknown error!';
    if (error.error instanceof ErrorEvent) {
      // Client-side errors
      errorMessage = `Error: ${error.error.message}`;
    } else {
      // Server-side errors
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    // TODO: change it
    window.alert(errorMessage);
    return throwError(errorMessage);
  }

  /**
   * Get
   */
  public Get<Response>(path: string, params: HttpParams): Observable<Response> {
    return this.httpClient
      .get<Response>(this.REST_API_SERVER + path, {
        params
      })
      .pipe(retry(3), catchError(this.handleError));
  }

  /**
   * Post
   */
  public Post<Response, Payload>(
    path: string,
    data: Payload
  ): Observable<Response> {
    return this.httpClient
      .post<Response>(this.REST_API_SERVER + path, data)
      .pipe(retry(3), catchError(this.handleError));
  }

  /**
   * Post
   */
  public Patch<Response, Payload>(data: Payload): Response {
    return ([] as unknown) as Response;
  }
}

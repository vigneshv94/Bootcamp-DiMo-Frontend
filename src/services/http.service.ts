import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  private REST_API_SERVER = 'http://localhost:3000';

  constructor(private httpClient: HttpClient) {}

  /**
   * Get
   */
  public Get<Response>(): Response {
    return ([] as unknown) as Response;
  }

  /**
   * Post
   */
  public Post<Response, Payload>(data: Payload): Response {
    return ([] as unknown) as Response;
  }

  /**
   * Post
   */
  public Patch<Response, Payload>(data: Payload): Response {
    return ([] as unknown) as Response;
  }

}

import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { HttpService } from './http.service';
import { userDetails } from '../interfaces';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  public validUser: BehaviorSubject<boolean> = new BehaviorSubject(false);

  constructor(httpService: HttpService) { }

  public getValidUser(email: string, password: string): boolean {
    return true;
  }


  public validateUser(email: string, password: string): any {}

  public createAccount(payload: userDetails) {
  }
}

import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  
  public validUser: BehaviorSubject<boolean> = new BehaviorSubject(false);
  constructor() { }

  public getValidUser(email: string, password: string): boolean {
    return true
  }
}

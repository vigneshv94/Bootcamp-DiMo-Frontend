import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { HttpService } from '../services/http.service';
import { browserStorage } from '../services/browserStorage.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  constructor(private httpService: HttpService, private router: Router) {
    this.loginForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required])
    });
  }

  ngOnInit(): void {}

  get email() {
    return this.loginForm.get('email');
  }

  get password() {
    return this.loginForm.get('password');
  }

  formControlValue(control: string): string {
    return this.loginForm.get(control).value;
  }

  onSubmit() {
    console.log(
      this.formControlValue('email'),
      this.formControlValue('password')
    );
    let response = {
      token: '34567567897890'
    };

    this.httpService
      .Post<LoginResponse, any>('/api/login', {
        email: this.formControlValue('email'),
        password: this.formControlValue('password')
      })
      .subscribe(
        token => {
          browserStorage.save('token', token);
          this.router.navigate(['/dashboard']);
        },
        err => {
          // TODO: Show Erro Message to user
          console.error('Observer got an error: ' + err);
        },
        () => {
          console.log('Observer got a complete notification');
        }
      );
  }
}

export interface LoginResponse {
  token: string;
}

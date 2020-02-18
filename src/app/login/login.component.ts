import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { HttpService } from '../services/http.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  constructor(private httpService: HttpService) {
    this.loginForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required]),
    })
  }

  ngOnInit(): void {
  }

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
    console.log(this.formControlValue('email'), this.formControlValue('password'));
    this.httpService.Post<any, any>(`/api/profile/login`, { "emailId" : this.formControlValue('email'), 
            "password" : this.formControlValue('password')}).subscribe(log => console.log(log));

  }


}

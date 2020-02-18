import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { userDetails } from '../interfaces';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  signupForm: FormGroup
  constructor(private authService: AuthService) { 
    this.signupForm = new FormGroup({
      firstName: new FormControl('', [
        Validators.minLength(3)
      ]),
      lastName: new FormControl('', [
        Validators.minLength(3)
      ]),
      email: new FormControl('', [
        Validators.pattern(/^[_A-Za-z0-9-\\\\+]+(\.[_A-Za-z0-9-]+)*@[A-Za-z0-9-]+(\.[A-Za-z0-9]+)*(\.[A-Za-z]{2,})$/)
      ]),
      password: new FormControl('', [Validators.required, Validators.pattern(/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{7,15}$/)])
    })
  }

  ngOnInit(): void {}

  get firstName() {
    return this.signupForm.get('firstName');
  }

  get lastName() {
    return this.signupForm.get('lastName');
  }

  get email() {
    return this.signupForm.get('email');
  }

  get password() {
    return this.signupForm.get('password');
  }

  formControlValue(control: string): string {
    return this.signupForm.get(control).value;
  }

  onSubmit() {
    let details: userDetails = {
      firstName: this.firstName.value,
      lastName: this.lastName.value,
      email: this.email.value,
      password: this.password.value
    }
    this.authService.createAccount(details);
  }

}

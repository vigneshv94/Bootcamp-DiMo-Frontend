import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  signupForm: FormGroup
  constructor() { 
    this.signupForm = new FormGroup({
      firstName: new FormControl('', [
        Validators.minLength(3)
      ]),
      lastName: new FormControl('', [
        Validators.minLength(3)
      ]),
      email: new FormControl('', [
        Validators.email
      ]),
      password: new FormControl('', [Validators.required, Validators.pattern(/^[A-Za-z]\w{7,14}$/)])
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
    console.log(this.formControlValue('name'), this.formControlValue('email'), this.formControlValue('password'))
  }

}

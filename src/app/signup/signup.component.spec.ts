import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SignupComponent } from './signup.component';
import { By } from '@angular/platform-browser';
import { ReactiveFormsModule, FormsModule, AbstractControl } from '@angular/forms';
import { strict } from 'assert';
import { AuthService } from '../services/auth.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { HttpClient } from '@angular/common/http';
import { userDetails } from '../interfaces';

class MockAuthService {
  public createAccount(userDetails: userDetails) {}
}


fdescribe('SignupComponent', () => {
  let component: SignupComponent;
  let fixture: ComponentFixture<SignupComponent>;
  let firstName: AbstractControl;
  let lastName: AbstractControl;
  let email: AbstractControl;
  let password: AbstractControl;
  let signUpButton: HTMLButtonElement;
  let creatAccountSpy: jasmine.Spy;
  let authService: AuthService

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SignupComponent ],
      imports: [FormsModule, ReactiveFormsModule],
      providers: [{provide: AuthService, useClass: MockAuthService}, HttpClientTestingModule, HttpClient]
    })
    .compileComponents();

    authService = TestBed.get(AuthService);
    

    creatAccountSpy = spyOn(authService, 'createAccount');
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SignupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

    firstName = component.signupForm.controls.firstName;
    lastName = component.signupForm.controls.lastName;
    email = component.signupForm.controls.email;
    password = component.signupForm.controls.password;
    signUpButton = selectQuery("button[type='submit']");
  });

  it('should create', () => {
    expect(component).toBeTruthy();
    let firstName = selectQuery('#firstName').value;
    let lastName = selectQuery('#lastName').value;
    let email = selectQuery('#email').value;
    let password = selectQuery('#password').value;
    expect(firstName).toEqual('');
    expect(lastName).toEqual('');
    expect(email).toEqual('');
    expect(password).toEqual('');
    expect(signUpButton.disabled).toBeTruthy();
  });

  it('should make input field invalid if input is not valid', () => {
    
    firstName.setValue('rt');
    lastName.setValue('ry');
    email.setValue('rt');
    password.setValue('13e');

    fixture.detectChanges()
    expect(firstName.valid).toBeFalse();
    expect(lastName.valid).toBeFalse();
    expect(email.valid).toBeFalse();
    expect(password.valid).toBeFalse();
    expect(signUpButton.disabled).toBeTruthy();
  });

  it('should make input field valid if input is valid', () => {
    firstName.setValue('rtty');
    lastName.setValue('rtty');
    email.setValue('rt@gmail.com');
    password.setValue('e1@Rurt78yyh');

    fixture.detectChanges()
    expect(firstName.valid).toBeTruthy();
    expect(lastName.valid).toBeTruthy();
    expect(email.valid).toBeTruthy();
    expect(password.valid).toBeTruthy();
    expect(signUpButton.disabled).toBeFalsy();
  });

  it('should call onSubmit method if user cliks signup', ()=> {
    const mockUserDetails: userDetails = {
      firstName: 'rtty',
      lastName: 'yui',
      email: 'rt@gmail.com',
      password: 'e1@rUrt78yyh'
    }
    firstName.setValue('rtty');
    lastName.setValue('yui');
    email.setValue('rt@gmail.com');
    password.setValue('e1@rUrt78yyh');
    fixture.detectChanges()
    
    signUpButton.click();
    fixture.detectChanges();
    expect(creatAccountSpy).toHaveBeenCalledTimes(1);
    expect(creatAccountSpy.calls.all()[0].args[0]).toEqual(mockUserDetails);
  });

  it('should disable signup if form is not valid', ()=> {
    firstName.setValue('eryy');
    fixture.detectChanges();
    expect(signUpButton.disabled).toBeTruthy();
  });

  function selectQuery(field: string): any {
    return fixture.debugElement.query(By.css(field)).nativeElement;
  }
});

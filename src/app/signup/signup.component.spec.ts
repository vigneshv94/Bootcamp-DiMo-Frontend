import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SignupComponent } from './signup.component';
import { By } from '@angular/platform-browser';
import { ReactiveFormsModule, FormsModule, AbstractControl } from '@angular/forms';
import { strict } from 'assert';


fdescribe('SignupComponent', () => {
  let component: SignupComponent;
  let fixture: ComponentFixture<SignupComponent>;
  let firstName: AbstractControl;
  let lastName: AbstractControl;
  let email: AbstractControl;
  let password: AbstractControl;
  let signUpButton: HTMLButtonElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SignupComponent ],
      imports: [FormsModule, ReactiveFormsModule]
    })
    .compileComponents();
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
    password.setValue('e1_rurt78yyh');

    fixture.detectChanges()
    expect(firstName.valid).toBeTruthy();
    expect(lastName.valid).toBeTruthy();
    expect(email.valid).toBeTruthy();
    expect(password.valid).toBeTruthy();
    expect(signUpButton.disabled).toBeFalsy();
  });

  xit('should call onSubmit method if user cliks signup', ()=> {
    firstName.setValue('rtty');
    email.setValue('rt@gmail.com');
    password.setValue('e1_rurt78yyh');
    fixture.detectChanges()
    
    signUpButton.click();
    fixture.detectChanges();
    expect(component.onSubmit).toHaveBeenCalledTimes(1);
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

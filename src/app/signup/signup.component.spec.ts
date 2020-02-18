import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SignupComponent } from './signup.component';
import { By } from '@angular/platform-browser';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';


fdescribe('SignupComponent', () => {
  let component: SignupComponent;
  let fixture: ComponentFixture<SignupComponent>;

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
  });

  it('should create', () => {
    expect(component).toBeTruthy();
    let userName = fixture.debugElement.query(By.css('#name')).nativeElement.value;
    let email = fixture.debugElement.query(By.css('#email')).nativeElement.value;
    let password = fixture.debugElement.query(By.css('#password')).nativeElement.value;
    expect(userName).toEqual('');
    expect(email).toEqual('');
    expect(password).toEqual('');
  });

  it('should make input field invalid if input is not valid', () => {
    let userName = component.signupForm.controls.name;
    let email = component.signupForm.controls.email;
    let password = component.signupForm.controls.password;
    userName.setValue('rt');
    email.setValue('rt');
    password.setValue('13e');

    fixture.detectChanges()
    expect(userName.valid).toBeFalse();
    expect(email.valid).toBeFalse();
    expect(password.valid).toBeFalse();
  });

  it('should make input field valid if input is valid', () => {
    let userName = component.signupForm.controls.name;
    let email = component.signupForm.controls.email;
    let password = component.signupForm.controls.password;
    userName.setValue('rtty');
    email.setValue('rt@gmail.com');
    password.setValue('e1_rurt78yyh');

    fixture.detectChanges()
    expect(userName.valid).toBeTruthy();
    expect(email.valid).toBeTruthy();
    expect(password.valid).toBeTruthy();
  });

  xit('should call onSubmit method if user cliks signup', ()=> {
    let userName = component.signupForm.controls.name;
    let email = component.signupForm.controls.email;
    let password = component.signupForm.controls.password;
    userName.setValue('rtty');
    email.setValue('rt@gmail.com');
    password.setValue('e1_rurt78yyh');
    fixture.detectChanges()
    let signUpButton = fixture.debugElement.query(By.css("button[type='submit']")).nativeElement;
    signUpButton.click();
    fixture.detectChanges();
    expect(component.onSubmit).toHaveBeenCalledTimes(1);
  });
});

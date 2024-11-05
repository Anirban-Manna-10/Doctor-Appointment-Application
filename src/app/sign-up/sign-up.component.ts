import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-sign-up',
  standalone: true,
  imports: [RouterModule,FormsModule,HttpClientModule],
  templateUrl: './sign-up.component.html',
  styleUrl: './sign-up.component.css'
})
export class SignUpComponent {
  Details:SignUp;
  ConfirmPassword:string;

  constructor(private http:HttpClient){
    this.Details = new SignUp();
    this.ConfirmPassword = '';
  }
  validUserMessage:string = "Enter Username and Verify"
  isValidUserName:boolean = false; 
  isValidMail:boolean = true;
  isValidMobileNo:boolean = true;
  isValidPass = true;
  isValidConfirmPass = true;


  validateUsername(): boolean {
      this.isValidUserName = this.Details.userName === "cap10";
      if(this.isValidUserName)
        this.validUserMessage = "This one is correct!";
      else
        this.validUserMessage = "Already taken or invalid, Try again!"
      return this.isValidUserName;
  }
}

export class SignUp{
  FullName:string;
  userName:string;
  EmailId: string;
  Password :string;
  PhoneNo:string;
  // If role value is 
  // 0 then error as Select the correct Option
  // 1 then the user role is a user or a patient
  // 2 then the user is a Doctor
  constructor(){
    this.FullName = '';
    this.userName = '';
    this.EmailId = '';
    this.Password = '';
    this.PhoneNo = '';
  }
}

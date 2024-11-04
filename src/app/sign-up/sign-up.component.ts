import { HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { SignUpService } from '../sign-up-service.service';

@Component({
  selector: 'app-sign-up',
  standalone: true,
  imports: [RouterModule, FormsModule, HttpClientModule, CommonModule],
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent {
  Details: SignUp;
  confirmPassword: string;
  validUserMessage: string = "Enter Username and Verify";
  isValidUserName: boolean = false;

  constructor(private signUpService: SignUpService , private router: Router) {
    this.Details = new SignUp();
    this.confirmPassword = '';
  }

  validateUsername(): void {
    if (!this.Details.userName) {
      this.validUserMessage = "Please enter a username.";
      return;
    }

    this.signUpService.checkUsernameAvailability(this.Details.userName).subscribe(
      response => {
        this.isValidUserName = response.available;
        this.validUserMessage = response.message;
      },
      error => {
        console.error('Error checking username availability', error);
        this.isValidUserName = false;
        this.validUserMessage = "Error checking username availability.";
      }
    );
  }

  onSubmit() {
    if (this.Details.password !== this.confirmPassword) {
      alert('Passwords do not match!');
      return;
    }

    this.signUpService.registerUser(this.Details).subscribe(
      response => {
        console.log('User registered successfully!', response);
        alert('Registration successful!');
        this.router.navigate(['/login']);
      },
      error => {
        console.error('Error registering user', error);
        alert('Error registering user: ' + (error.error.message || 'Server error'));
      }
    );
  }
}

export class SignUp {
  fullName: string;
  userName: string;
  email: string;
  password: string;
  mobileNo: string;

  constructor() {
    this.fullName = '';
    this.userName = '';
    this.email = '';
    this.password = '';
    this.mobileNo = '';
  }
}

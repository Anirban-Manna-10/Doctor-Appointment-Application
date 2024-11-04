import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { SignUpService } from '../sign-up-service.service';
import { CommonModule } from '@angular/common';
import { FormsModule, NgModel } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone:true,
  imports:[CommonModule,FormsModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginObj = { email: '', password: '' };
  errorMessage: string = '';
  isLoggingIn: boolean = false;

  constructor(private signUpService: SignUpService, private router: Router) {}

  onLogin() {
    this.isLoggingIn = true;
    this.signUpService.loginUser(this.loginObj).subscribe(
      response => {
        console.log('User logged in successfully!', response);
        // Navigate to another page on successful login
        this.router.navigate(['/home']); // Change this to your desired route
      },
      error => {
        console.error('Error logging in', error);
        this.errorMessage = 'Invalid email or password';
        this.isLoggingIn = false;
      }
    );
  }
}

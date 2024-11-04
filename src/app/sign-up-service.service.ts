// signupservice.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { SignUp } from './sign-up/sign-up.component';

@Injectable({
  providedIn: 'root'
})
export class SignUpService {
  private baseUrl = 'http://localhost:8080/api/users';

  constructor(private http: HttpClient) {}

  checkUsernameAvailability(username: string): Observable<{ available: boolean, message: string }> {
    return this.http.get<{ available: boolean, message: string }>(`${this.baseUrl}/check-username?username=${username}`);
  }

  registerUser(user: SignUp): Observable<any> {
    return this.http.post(`${this.baseUrl}/signup`, user);
  }

  loginUser(credentials: { email: string; password: string }): Observable<any> {
    return this.http.post(`${this.baseUrl}/login`, null, {
      params: {
        email: credentials.email,
        password: credentials.password
      }
    });
  }
}

import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';


@Component({
  selector: 'app-login',
  standalone: true,
  imports: [RouterModule,HttpClientModule,FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  loginObj:Login;
  constructor(private http:HttpClient){
    this.loginObj = new Login();
  }

  isLoggingIn:boolean = false;
  
  onLogin(){
    this.isLoggingIn = true;
    const dummyUser = {
      EmailId: 'shucu@gmail.com',
      Password: 'pass123'
    };

    if (this.loginObj.EmailId === dummyUser.EmailId && this.loginObj.Password === dummyUser.Password) {
      alert("Login Success");
    } else {
      alert("Invalid Email or Password");
    }
    this.isLoggingIn= false;
    // debugger;
    // this.isLoggingIn = true;
    // this.http.post("https://freeapi.miniprojectideas.com/api/User/Login", this.loginObj)
    //   .subscribe(
    //     (res: any) => {
    //       if(res?.result){
    //         alert("Login Success");
    //       }else{
    //         alert(res.message);
    //       }
    //       this.isLoggingIn = false;
    //     },
    //   );
    }
}

export class Login{
  EmailId: string;
  Password :string;
  constructor(){
    this.EmailId = '';
    this.Password = '';
  }
}

import { Routes} from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { HomeComponent } from './home/home.component';
import { DoctorDetailsComponent } from './doctor-details/doctor-details.component';

export const routes: Routes = [
    { 
        path:'' , redirectTo: 'home' , pathMatch:'full'
    },

    { 
        path: 'home', component: HomeComponent
    },
    
    {
        path: 'login', component: LoginComponent
    },

    {
        path: 'signup', component: SignUpComponent
    },
    {   
        path: 'doctor-details', component: DoctorDetailsComponent 

    }
];

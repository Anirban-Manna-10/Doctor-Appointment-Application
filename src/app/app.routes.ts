import { Routes} from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { HomeComponent } from './home/home.component';
import { DoctorDetailsComponent } from './doctor-details/doctor-details.component';
import { UserLayoutComponent } from './user-layout/user-layout.component';
import { UserDashboardComponent } from './user-dashboard/user-dashboard.component';
import { UserProfileComponent } from './user-profile/user-profile.component';

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
    },
    {
        path: 'user', component:UserLayoutComponent,
        children:[
            {
                path:'',
                redirectTo: 'dashboard' , pathMatch:'full'
            },
            {
                path:'dashboard',
                component:UserDashboardComponent
            },
            {
                path:'find-doctor',
                component:LoginComponent
            },
            {
                path:'profile',
                component:UserProfileComponent
            }
        ]
    }
];

import { Routes} from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { HomeComponent } from './home/home.component';
import { DoctorDetailsComponent } from './doctor-details/doctor-details.component';
import { UserLayoutComponent } from './user-layout/user-layout.component';
import { UserDashboardComponent } from './user-dashboard/user-dashboard.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { UserProfileEditComponent } from './user-profile-edit/user-profile-edit.component';
import { AppointmentListComponent } from './appointment-list/appointment-list.component';
import { DoctorLayoutComponent } from './doctor-layout/doctor-layout.component';
import { DoctorDashboardComponent } from './doctor-dashboard/doctor-dashboard.component';
import { DoctorAvailabilityComponent } from './doctor-availability/doctor-availability.component';
import { DocListComponent } from './doc-list/doc-list.component';

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
                component:DocListComponent
                component:DocListComponent
            },
            {
                path:'profile',
                component:UserProfileComponent
            },
            {
                path:'profile-edit',
                component:UserProfileEditComponent
            }
        ]
    },

    {
        path: 'doctor', component:DoctorLayoutComponent,
        children:[
            {
                path:'',
                redirectTo: 'dashboard' , pathMatch:'full'
            },
            {
                path:'dashboard',
                component:DoctorDashboardComponent
            },
            {
                path:'schedule-availability',
                component:DoctorAvailabilityComponent
            },
            {
                path:'appointment-list',
                component:AppointmentListComponent
            },
            {
                path:'profile',
                component:DoctorDetailsComponent
            },
        ]
    }
];

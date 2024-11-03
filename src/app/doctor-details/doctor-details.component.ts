import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';


@Component({
  standalone: true,
  selector: 'app-doctor-details',
  templateUrl: './doctor-details.component.html',
  imports: [RouterOutlet,FormsModule],
  styleUrls: ['./doctor-details.component.css'],
})
export class DoctorDetailsComponent implements OnInit{
  constructor() {}
  ngOnInit(): void {}
  doctorProfile = {
    name: '',
    specialization: '',
    hospitalName: '',
    location: '',
    photo: '',
    clinicMobile: '',
    description: '',
  };

  onSaveProfile() {
    console.log("Doctor profile saved:", this.doctorProfile);
  }
  onProfilePictureChange(event: Event) {
    const fileInput = event.target as HTMLInputElement;
    if (fileInput.files && fileInput.files[0]) {
      const file = fileInput.files[0];
      // Handle the file upload logic
      console.log('Profile Picture:', file.name);
    }
  }

}

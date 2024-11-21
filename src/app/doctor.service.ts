import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DoctorService {
  private doctorDetails: any;

  setDoctorDetails(doctor: any): void {
    this.doctorDetails = doctor;
  }

  getDoctorDetails(): any {
    return this.doctorDetails;
  }
}
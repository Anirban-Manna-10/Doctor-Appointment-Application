import { Component, OnInit, Inject, PLATFORM_ID } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DoctorService } from '../doctor.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DatePipe } from '@angular/common';


@Component({
  selector: 'app-check-availability',
  standalone: true,
  templateUrl: './check-availability.component.html',
  styleUrls: ['./check-availability.component.css'],
  imports: [CommonModule, FormsModule],
  providers: [DatePipe]
})
export class CheckAvailabilityComponent implements OnInit {
  doctor: any;
  //availableDates: string[] = [];
  availableTimes: string[] = ['9:00 AM','10:00 AM', '11:00 AM','12:00 PM', '1:00 PM','2:00 AM', '3:00 PM','4:00 AM','5:00 PM','6:00 AM','7:00 PM','8:00 PM'];
  selectedDate: string = '';
  selectedTime: string = '';
  timeSlotsInRows: string[][] = []; 
  dateError: string | null = null;
  minDate: string = '';
  maxDate: string = '';
  patient: any = {
    name: '',
    phone: '',
    age: null,
    gender: '',
    description: '',
  };

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private doctorService: DoctorService,
    private datePipe: DatePipe
  ) {}

  ngOnInit(): void {
    const min = new Date(2024, 10, 18); // November is month 10 (zero-indexed)
    const max = new Date(2024, 11, 25); // December is month 11
    this.minDate = this.datePipe.transform(min, 'yyyy-MM-dd') || '';
    this.maxDate = this.datePipe.transform(max, 'yyyy-MM-dd') || '';
    this.doctor = this.doctorService.getDoctorDetails();
    //this.generateAvailableDates();
    if (!this.doctor) {
      const doctorData = localStorage.getItem('selectedDoctor');
      if (doctorData) {
        this.doctor = JSON.parse(doctorData);
      } else {
        console.error('No doctor details found!');
      }
    }
    
  }
  validateDate(): void {
    if (this.selectedDate < this.minDate || this.selectedDate > this.maxDate) {
      this.dateError = `Please select a date between 18 Nov and 25 Dec.`;
    } else {
      this.dateError = null; // Clear the error if the date is valid
    }
  }

  selectDate(date: string) {
    this.selectedDate = date;
  }

  selectTime(time: string) {
    this.selectedTime = time;
  }

  bookAppointment() {
    if (this.selectedDate && this.selectedTime&& !this.dateError) {
      console.log('Appointment booked with the following details:');
      console.log('Date:', this.selectedDate);
      console.log('Time:', this.selectedTime);
      console.log('Patient Info:', this.patient);
      
      alert(`Appointment booked with ${this.doctor?.name || 'the doctor'} on ${this.selectedDate} at ${this.selectedTime}`);
    } else {
      alert('Please fill out all fields and select a valid date.');
    }
  }
  
}
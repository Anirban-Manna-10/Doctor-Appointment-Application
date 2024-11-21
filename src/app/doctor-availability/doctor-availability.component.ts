import { Component, OnInit } from '@angular/core';
import { addDays } from 'date-fns';
import { CommonModule, DatePipe } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Console } from 'node:console';

@Component({
  selector: 'app-doctor-availability',
  templateUrl: './doctor-availability.component.html',
  styleUrls: ['./doctor-availability.component.css'],
  standalone: true,
  imports:[DatePipe,CommonModule,FormsModule]
})
export class DoctorAvailabilityComponent  implements OnInit {
  
  // Array of non-overlapping schedules
  schedules = [
    {
      doctorId: 1,
      startDate: new Date('2024-11-01'),
      endDate: new Date('2024-11-10'),
      startTime: '09:00',
      endTime: '12:00',
    },
    {
      doctorId: 2,
      startDate: new Date('2024-11-11'),
      endDate: new Date('2024-11-15'),
      startTime: '10:00',
      endTime: '14:00',
    },
    {
      doctorId: 3,
      startDate: new Date('2024-11-16'),
      endDate: new Date('2024-11-18'),
      startTime: '08:00',
      endTime: '11:00',
    },
  ];

  //Taking the lates date
  minStartDate:String = '';
  minEndDate:String = '';
  msg:String = '*Choose the Starting Date First';
  timeMsg:String = '';

  //Input box credentials
  startDate: string = '';
  endDate: string = '';
  startTime: string = '';
  endTime: string = ''; 
  isValid:boolean =false;
  ngOnInit() {
    const today = new Date();
    this.minStartDate = today.toISOString().split('T')[0];
    this.minEndDate = this.minStartDate;
    this.generateDateObjects();
  }

  AddSlot(){
    alert("Adding a slot with Start : "+ this.startDate + " End : " + this.endDate + "\nWith a Time slot of : " + this.startTime +" -> " + this.endTime);
  }

  updateEndLimit() {
    if (this.startDate) {
      this.minEndDate = this.startDate;
    }
    this.msg = '';
  }

  validateTimeRange() {
    if (this.startTime && this.endTime) {
      const start = this.convertToMinutes(this.startTime);
      const end = this.convertToMinutes(this.endTime);
      console.log(start + " " + end);
      
      if (end <= start) {
        this.timeMsg = '*End time must be after start time.';
        this.isValid = false;
        console.log("Hobe na");
      } else {
        this.timeMsg = '';
        this.isValid = true;
        console.log("Hobe");
      }
    }
  }

    convertToMinutes(time: string): number {
      const [hours, minutes] = time.split(':').map(Number);
      return hours * 60 + minutes;
    }



  // *********************************************************************************************
  // *********************************************************************************************
  // *********************************************************************************************
  // *********************************************************************************************
  // *********************************************************************************************
  // *********************************************************************************************
  
  
  //This will store the dates 
  dateObjects: { weekday: string; date: number; month: string; fullDate: Date }[] = [];



  generateDateObjects() {
    const today = new Date();

    for (let i = 0; i < 5; i++) {
      const nextDate = new Date(today);
      nextDate.setDate(today.getDate() + i);

      // Create a date object with separate fields
      const dateObject = {
        weekday: nextDate.toLocaleString('en-US', { weekday: 'short' }),
        date: nextDate.getDate(),
        month: nextDate.toLocaleString('en-US', { month: 'short' }),
        fullDate: nextDate
      };

      this.dateObjects.push(dateObject);
    }
  }
}

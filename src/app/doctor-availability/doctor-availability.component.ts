import { Component, OnInit } from '@angular/core';
import { addDays } from 'date-fns';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-doctor-availability',
  templateUrl: './doctor-availability.component.html',
  styleUrls: ['./doctor-availability.component.css'],
  standalone: true,
  imports:[DatePipe]
})
export class DoctorAvailabilityComponent  implements OnInit {
  weekDates: Date[] = [];
  selectedDate: Date | null = null;
  selectedTime: string | null = null;
  timeSlots: string[] = ['7:30 AM', '8:30 AM', '9:00 AM', '9:30 AM', '10:30 AM', '11:30 AM'];

  ngOnInit() {
    this.getCurrentWeek();
  }

  getCurrentWeek() {
    const today = new Date();
    this.weekDates = Array.from({ length: 7 }, (_, i) => addDays(today, i));
    this.selectedDate = this.weekDates[0];
  }

  selectDate(date: Date) {
    this.selectedDate = date;
  }

  selectTime(time: string) {
    this.selectedTime = time;
  }

  prevWeek() {
    this.weekDates = this.weekDates.map(date => addDays(date, -7));
  }

  nextWeek() {
    this.weekDates = this.weekDates.map(date => addDays(date, 7));
  }

}

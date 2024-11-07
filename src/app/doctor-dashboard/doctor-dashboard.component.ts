import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-doctor-dashboard',
  standalone:true,
  imports:[FormsModule ,CommonModule],
  templateUrl: './doctor-dashboard.component.html',
  styleUrls: ['./doctor-dashboard.component.css'],
})
export class DoctorDashboardComponent implements OnInit {

  Appointments: Appointment[] = [
    // Past appointments
    {
      id: 101,
      name: 'Dr. A.P.J. Abdul Kalam',
      date: '05th Jun, 2023',
      time: '12:50pm',
      avatarUrl: 'https://i.pinimg.com/736x/cd/8a/4c/cd8a4c40849a591d88e67e6f9d0c1956.jpg'
    },
    {
      id: 102,
      name: 'Homi J. Bhabha',
      date: '20th Oct, 2023',
      time: '10:30am',
      avatarUrl: 'https://i.pinimg.com/736x/cd/8a/4c/cd8a4c40849a591d88e67e6f9d0c1956.jpg'
    },
  
    // Appointments for today's date (07/11/2024)
    {
      id: 103,
      name: 'C.V. Raman',
      date: '07th Nov, 2024',
      time: '9:00am',
      avatarUrl: 'https://i.pinimg.com/736x/cd/8a/4c/cd8a4c40849a591d88e67e6f9d0c1956.jpg'
    },
    {
      id: 104,
      name: 'Satyendra Nath Bose',
      date: '07th Nov, 2024',
      time: '11:15am',
      avatarUrl: 'https://i.pinimg.com/736x/cd/8a/4c/cd8a4c40849a591d88e67e6f9d0c1956.jpg'
    },
    {
      id: 105,
      name: 'Vikram Sarabhai',
      date: '07th Nov, 2024',
      time: '2:00pm',
      avatarUrl: 'https://i.pinimg.com/736x/cd/8a/4c/cd8a4c40849a591d88e67e6f9d0c1956.jpg'
    },
    {
      id: 106,
      name: 'Jagadish Chandra Bose',
      date: '07th Nov, 2024',
      time: '4:30pm',
      avatarUrl: 'https://i.pinimg.com/736x/cd/8a/4c/cd8a4c40849a591d88e67e6f9d0c1956.jpg'
    },
  
    // Upcoming appointments
    {
      id: 107,
      name: 'N.R. Narayana Murthy',
      date: '10th Nov, 2024',
      time: '10:00am',
      avatarUrl: 'https://i.pinimg.com/736x/cd/8a/4c/cd8a4c40849a591d88e67e6f9d0c1956.jpg'
    },
    {
      id: 108,
      name: 'Ratan Tata',
      date: '11th Nov, 2024',
      time: '12:00pm',
      avatarUrl: 'https://i.pinimg.com/736x/cd/8a/4c/cd8a4c40849a591d88e67e6f9d0c1956.jpg'
    },
    {
      id: 109,
      name: 'Kiran Mazumdar-Shaw',
      date: '12th Nov, 2024',
      time: '3:00pm',
      avatarUrl: 'https://i.pinimg.com/736x/cd/8a/4c/cd8a4c40849a591d88e67e6f9d0c1956.jpg'
    },
    {
      id: 110,
      name: 'Azim Premji',
      date: '15th Nov, 2024',
      time: '5:15pm',
      avatarUrl: 'https://i.pinimg.com/736x/cd/8a/4c/cd8a4c40849a591d88e67e6f9d0c1956.jpg'
    },
  
    // Additional appointments
    {
      id: 111,
      name: 'Satya Nadella',
      date: '05th Dec, 2024',
      time: '9:00am',
      avatarUrl: 'https://i.pinimg.com/736x/cd/8a/4c/cd8a4c40849a591d88e67e6f9d0c1956.jpg'
    }
  ];
  AppointmantsToShow : Appointment[] = [];

  selectedOption: string = '';

  filterAppointmentsByDate() {
    this.selectOption("today");
    this.AppointmantsToShow = this.Appointments.filter((appointment: Appointment) => appointment.date === '07th Nov, 2024');
  }

  filterAppointmentsAfterToday() {
    this.selectOption('all');
    this.AppointmantsToShow = this.Appointments;
  }

  selectOption(option: string): void {
    this.selectedOption = option;
  }

  ngOnInit() {
    this.filterAppointmentsByDate();
  }
}

interface Appointment{
  id: number;
  name: string;
  date: string;
  time: string;
  avatarUrl: string;
}


import { Component, ElementRef, OnInit, ViewChild, } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterModule, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-doctor-layout',
  standalone: true,
  imports: [RouterOutlet,RouterModule , RouterLink ,RouterLinkActive],
  templateUrl: './doctor-layout.component.html',
  styleUrls: ['./doctor-layout.component.css'],
})
export class DoctorLayoutComponent  implements OnInit {

  constructor() { }

  ngOnInit() {}

  
}

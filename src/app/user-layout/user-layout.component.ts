import { Component, ElementRef, OnInit, ViewChild, } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterModule, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-user-layout',
  standalone: true,
  imports: [RouterOutlet,RouterModule , RouterLink ,RouterLinkActive],
  templateUrl: './user-layout.component.html',
  styleUrls: ['./user-layout.component.css'],
})
export class UserLayoutComponent  implements OnInit {

  constructor() { }

  ngOnInit() {}
  @ViewChild('sidebar') sidebar!: ElementRef;
  @ViewChild('toggle') toggle!: ElementRef;

  ngAfterViewInit(): void {
    this.toggle.nativeElement.addEventListener("click", () => {
      this.sidebar.nativeElement.classList.toggle("close");
    });
    
  }
}

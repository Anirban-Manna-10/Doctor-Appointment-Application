import { Component, OnInit } from '@angular/core';
import { Router, RouterLink, RouterModule } from '@angular/router';

@Component({
  selector: 'app-user-profile',
  standalone: true,
  imports: [RouterModule , RouterLink],
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css'],
})
export class UserProfileComponent  implements OnInit {

  constructor(private router : Router ) {}

  ngOnInit() {}

  navigateToEdit() {
    this.router.navigate(['/user/profile-edit'])
  }


}

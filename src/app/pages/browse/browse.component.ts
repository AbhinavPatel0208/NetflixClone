import { CommonModule } from '@angular/common';
import { AuthService } from '../../shared/services/auth.service';
import { Component, inject } from '@angular/core';
import { HeadersComponent } from '../../core/components/headers/headers.component';

@Component({
  selector: 'app-browse',
  standalone: true,
  imports: [CommonModule,HeadersComponent],
  templateUrl: './browse.component.html',
  styleUrl: './browse.component.css'
})
export class BrowseComponent {
  auth = inject(AuthService);
  name = JSON.parse(sessionStorage.getItem("loggedInUser")!).name;
  userProfileImg = JSON.parse(sessionStorage.getItem("loggedInUser")!).picture;
  email = JSON.parse(sessionStorage.getItem("loggedInUser")!).email;

  signOut() { 
    sessionStorage.removeItem("loggedInUser");
    this.auth.signOut();
  }
}

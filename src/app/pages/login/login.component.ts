declare var google: any;
import { CommonModule } from '@angular/common';
import { Component, OnInit, inject } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit {

  private router = inject(Router);

  ngOnInit(): void {
    google.accounts.id.initialize({
      client_id: '68514327477-4b0i4aim4kgkkjf08f14jnitrne2vpen.apps.googleusercontent.com',
      callback: (res: any) => this.handleLogin(res)
    });

    google.accounts.id.renderButton(document.getElementById("google-btn"), {
      theme: 'filled_blue',
      size: 'large',
      shape: 'rectangle',
      width: 280
    })
  }

  private decodeToken(token:string) { 
    return JSON.parse(atob(token.split(".")[1]))
  }

  handleLogin(response: any) { 
    if (response) { 
      //Decode The Token
      const payload = this.decodeToken(response.credential);

      //Store in Session
      sessionStorage.setItem("loggedInUser", JSON.stringify(payload));

      //navigate to Home/Browse
      this.router.navigate(['browse'])
    }
  }

}

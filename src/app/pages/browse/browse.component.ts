import { MovieService } from './../../shared/services/movie.service';
import { CommonModule } from '@angular/common';
import { AuthService } from '../../shared/services/auth.service';
import { Component, inject } from '@angular/core';
import { HeadersComponent } from '../../core/components/headers/headers.component';
import { BannerComponent } from '../../core/components/banner/banner.component';
import { MovieCouroselComponent } from '../../shared/components/movie-courosel/movie-courosel.component';
import { IVideoContent } from '../../shared/model/vedio-content.interface';

@Component({
  selector: 'app-browse',
  standalone: true,
  imports: [CommonModule,HeadersComponent,BannerComponent,MovieCouroselComponent],
  templateUrl: './browse.component.html',
  styleUrl: './browse.component.css'
})
export class BrowseComponent {
  auth = inject(AuthService);
  MovieService = inject(MovieService);
  name = JSON.parse(sessionStorage.getItem("loggedInUser")!).name;
  userProfileImg = JSON.parse(sessionStorage.getItem("loggedInUser")!).picture;
  email = JSON.parse(sessionStorage.getItem("loggedInUser")!).email;


  popluarMovies: IVideoContent[] = [];

  ngOnInit(): void { 
    this.MovieService.getMovies()
      .subscribe(res => { 
        console.log(res);
        this.popluarMovies = res.results;
      })
  }

  signOut() { 
    sessionStorage.removeItem("loggedInUser");
    this.auth.signOut();
  }
}

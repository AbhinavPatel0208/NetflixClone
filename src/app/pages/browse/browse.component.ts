import { MovieService } from './../../shared/services/movie.service';
import { CommonModule } from '@angular/common';
import { AuthService } from '../../shared/services/auth.service';
import { Component, inject } from '@angular/core';
import { HeadersComponent } from '../../core/components/headers/headers.component';
import { BannerComponent } from '../../core/components/banner/banner.component';
import { MovieCouroselComponent } from '../../shared/components/movie-courosel/movie-courosel.component';
import { IVideoContent } from '../../shared/model/vedio-content.interface';
import { Observable, forkJoin, map } from 'rxjs';


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
  bannerDetail$ = new Observable<any>();
  bannerVideo$ = new Observable<any>();

  movies: IVideoContent[] = [];
  tvShows: IVideoContent[] = [];
  ratedMovies: IVideoContent[] = [];
  nowPlayingMovies: IVideoContent[] = [];
  popularMovies: IVideoContent[] = [];
  topRatedMovies: IVideoContent[] = [];
  upcomingMovies: IVideoContent[] = [];

  sources = [
    this.MovieService.getMovies(),
    this.MovieService.getTvShows(),
    this.MovieService.getRatedMovies(),
    this.MovieService.getNowPlayingMovies(),
    this.MovieService.getUpcomingMovies(),
    this.MovieService.getPopularMovies(),
    this.MovieService.getTopRated()
  ];

  ngOnInit(): void { 
    forkJoin(this.sources)
    .pipe(
      map(([movies, tvShows, ratedMovies, nowPlaying, upcoming, popular, topRated])=>{
        this.bannerDetail$ = this.MovieService.getBannerDetail(movies.results[0].id);
        this.bannerVideo$ = this.MovieService.getBannerVideo(movies.results[0].id);
        return {movies, tvShows, ratedMovies, nowPlaying, upcoming, popular, topRated}
      })
    ).subscribe((res:any)=>{
      this.movies = res.movies.results as IVideoContent[];
      this.tvShows = res.tvShows.results as IVideoContent[];
      this.ratedMovies = res.ratedMovies.results as IVideoContent[];
      this.nowPlayingMovies = res.nowPlaying.results as IVideoContent[];
      this.upcomingMovies = res.upcoming.results as IVideoContent[];
      this.popularMovies = res.popular.results as IVideoContent[];
      this.topRatedMovies = res.topRated.results as IVideoContent[];
      this.getMovieKey();
    })
  }
    getMovieKey() {
    this.MovieService.getBannerVideo(this.movies[0].id)
    .subscribe(res=>{
      console.log(res);
    })
  }

  signOut() { 
    sessionStorage.removeItem("loggedInUser");
    this.auth.signOut();
  }
}

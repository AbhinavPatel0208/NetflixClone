import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';


const options = {
  params: {
    include_adult: 'false',
    include_video: 'true',
    language: 'en-US',
    page: '1',
    sort_by: 'popularity.desc'
  },
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmZWZhYmI3YmViOTY1ZDc0MzA4OWQwNzc5Y2YwMzk3MyIsInN1YiI6IjY1OTdiOTVmNWNjMTFkNzgzZDdkNzY3MCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.qsCz-FSFeG4OoA2T2ZDb16ybWZicnORo-4TyUBZRgbo'
    }
}

@Injectable({
  providedIn: 'root'
})
  
export class MovieService {

  
  http = inject(HttpClient);

  getMovies() { 
    return this.http.get<any>('https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc',options)
  }
}
import { Component } from '@angular/core';
import { Movie } from '../Models/Movie';
import { ApiService } from '../Models/api';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  AllMovies: Movie[] = [];
  MovieToSearch: Movie = new Movie();

  constructor(private apiSvc: ApiService, private apiCaller: HttpClient) {
    this.getMovies();
  }

  getMovies() {
    this.AllMovies = [];
    this.apiCaller
      .get(this.apiSvc.getUrl())
      .subscribe((data: any) => {
        let movies = data.results;
        movies.forEach((movie: any) => {
          let m = new Movie();
          m.id = movie.id
          m.title = movie.title;
          m.poster_path = movie.poster_path;
          m.release_date = movie.release_date;
          this.AllMovies.push(m);
        });
      });
  }

  getMovieByName(movieName: string) {
    if (movieName == '') {
      this.getMovies();
    } else {
      this.AllMovies = [];
      this.apiCaller
        .get(this.apiSvc.getSearchUrl(movieName))
        .subscribe((data: any) => {
          let movies = data.results;
          movies.forEach((movie: any) => {
            let m = new Movie();
            if (movie.poster_path != null) {
              m.id = movie.id
              m.title = movie.title;
              m.poster_path = movie.poster_path;
              m.release_date = movie.release_date;
              this.AllMovies.push(m);
            }
          });
        });
    }
  }
}

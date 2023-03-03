import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ApiService } from '../Models/api';
import { ActivatedRoute } from '@angular/router';
import { Movie } from '../Models/Movie';

@Component({
  selector: 'app-specific-movie',
  templateUrl: './specific-movie.component.html',
  styleUrls: ['./specific-movie.component.css']
})
export class SpecificMovieComponent {
  Movie : Movie = new Movie();
  imgurl : string = '';

  constructor(private ac : ActivatedRoute, private apiSvc : ApiService, private apiCaller: HttpClient){
    const movieID = this.ac.snapshot.paramMap.get('id');
    this.apiCaller
      .get(this.apiSvc.getMovieUrl(movieID))
      .subscribe((data:any) => {
        this.Movie.title = data.title;
        this.Movie.overview = data.overview;
        this.Movie.poster_path = data.poster_path;
        this.Movie.vote_average = data.vote_average;
        this.Movie.release_date = data.release_date;
        this.imgurl = `https://image.tmdb.org/t/p/w500/${this.Movie.poster_path}`;
      });
  }
}

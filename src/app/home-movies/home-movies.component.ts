import { Component } from '@angular/core';
import { Input, EventEmitter, Output } from '@angular/core';
import { Movie } from '../Models/Movie';

@Component({
  selector: 'home-movies',
  templateUrl: './home-movies.component.html',
  styleUrls: ['./home-movies.component.css']
})
export class HomeMoviesComponent {
  @Input() Movies : Movie[] = [];
  url : string = 'https://image.tmdb.org/t/p/w500/';
  constructor(){}
}

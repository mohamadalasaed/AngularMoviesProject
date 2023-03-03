import { Component } from '@angular/core';
import { Input, EventEmitter, Output } from '@angular/core';
import { Movie } from '../Models/Movie';
import { ApiService } from '../Models/api';

@Component({
  selector: 'home-movies',
  templateUrl: './home-movies.component.html',
  styleUrls: ['./home-movies.component.css']
})
export class HomeMoviesComponent {
  @Input() Movies : Movie[] = [];
  @Output() MSG = new EventEmitter<string>();

  url : string = 'https://image.tmdb.org/t/p/w500/';
  constructor(private apiSvc: ApiService){}

  IncPage(){
    this.apiSvc.increment();
    this.MSG.emit('hey');
  }
}

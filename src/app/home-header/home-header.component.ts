import { Component, EventEmitter, Output } from '@angular/core';
import { Movie } from '../Models/Movie';
import { debounceTime, distinctUntilChanged, Subject, Subscription } from 'rxjs';

@Component({
  selector: 'home-header',
  templateUrl: './home-header.component.html',
  styleUrls: ['./home-header.component.css']
})
export class HomeHeaderComponent {
  @Output() Movie = new EventEmitter<string>();
  MovieNameSearch: string = '';
  public keyUp = new Subject<KeyboardEvent>();
  private subscription: Subscription = new Subscription();

  constructor() {
    this.subscription = this.keyUp.pipe(debounceTime(700), distinctUntilChanged()).subscribe(() => {
      this.Movie.emit(this.MovieNameSearch);
    });
  }
}

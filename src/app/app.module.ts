import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { HomeHeaderComponent } from './home-header/home-header.component';
import { HomeMoviesComponent } from './home-movies/home-movies.component';
import { ApiService } from './Models/api';
import { HttpClientModule } from '@angular/common/http';
import { SpecificMovieComponent } from './specific-movie/specific-movie.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    FooterComponent,
    HomeHeaderComponent,
    HomeMoviesComponent,
    SpecificMovieComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }

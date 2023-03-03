import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SpecificMovieComponent } from './specific-movie/specific-movie.component';

const routes: Routes = [
  {path:'', component: HomeComponent},
  {path:'movie/:id', component: SpecificMovieComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

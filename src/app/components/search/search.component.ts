import { Component, OnInit } from '@angular/core';
import { MovieApiService } from '../../services/movie_api/movie_api.service';
import { SearchResults } from '../../types/types';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent implements OnInit {
  public query = '';
  public searchResults: SearchResults = {};

  constructor(private movieApiService: MovieApiService) {}

  ngOnInit(): void {}

  getSearchResults(): void {
    this.movieApiService.searchMovie(this.query).subscribe((searchResults) => {
      this.searchResults = searchResults;
    });
  }
}

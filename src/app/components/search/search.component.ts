import { Component, OnInit } from '@angular/core';
import { MovieApiService } from '../../services/movie_api/movie_api.service';
import { SearchResult } from '../../types/types';
import { StorageService } from './../../services/storage.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent implements OnInit {
  public query = '';
  public searchResults: SearchResult[] = [];

  private oldQuery: string;

  constructor(private movieApiService: MovieApiService, private storageService: StorageService) { }

  ngOnInit(): void {

  }

  getSearchResults(): void {
    if (this.oldQuery === undefined || this.query.toLowerCase() !== this.oldQuery.toLowerCase()) {
      this.movieApiService.searchMovie(this.query).subscribe((searchResults) => {
        this.oldQuery = this.query;
        this.storageService.persistMovies(searchResults.results);
        this.searchResults = { ...searchResults.results };
      });
    } else {
      const results = this.storageService.getMovies();
      this.searchResults = { ...results };
    }
  }
}

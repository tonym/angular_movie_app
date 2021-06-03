import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { SearchOptions, SearchResults } from '../../types/types';

@Injectable({
  providedIn: 'root',
})
export class MovieApiService {
  private searchMovieUrl = 'https://api.themoviedb.org/3/search/movie';
  private searchMovieKey = '057dfa32a18eed0f2dc23dc2e80ed8a0';

  constructor(private http: HttpClient) {}

  searchMovie(query: string): Observable<SearchResults> {
    const endpoint = this.createEndpoint(query);
    return this.get(endpoint);
  }

  get<T>(url: string): Observable<T> {
    return this.http.get<T>(url).pipe(
      retry(1),
      catchError((error) => throwError(error))
    );
  }

  createEndpoint(
    query: string = '',
    searchOptions: SearchOptions = {}
  ): string {
    const defaultSearchOptions: SearchOptions = {
      page: '1',
      include_adult: 'false',
      language: 'en-US',
    };

    const options = { ...defaultSearchOptions, ...searchOptions };
    const { page, include_adult, language } = options;
    const encodedQuery = encodeURIComponent(query);
    return `${this.searchMovieUrl}?page=${page}&api_key=${this.searchMovieKey}&include_adult=${include_adult}&language=${language}&query=${query}`;
  }
}

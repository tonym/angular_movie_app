import { Injectable } from '@angular/core';
import { SearchResult } from './../types/types';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  private _KEY = 'movies';

  constructor() { }

  public getMovies(): SearchResult[] {
    const results = JSON.parse(window.sessionStorage[this._KEY]) as SearchResult[];
    return results;
  }

  public persistMovies(results: SearchResult[]) {
    window.sessionStorage.setItem(this._KEY, JSON.stringify(results));
  }
}

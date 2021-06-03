import { Component, OnInit } from '@angular/core';
import { MovieApiService } from '../../services/movie_api/movie_api.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent implements OnInit {
  constructor(private movieApiService: MovieApiService) {}

  ngOnInit(): void {}
}

import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { MovieApiService } from './movie_api.service';

fdescribe('ApiService', () => {
  let service: MovieApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    });
    service = TestBed.inject(MovieApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should create a valid endpoint', () => {
    const query = 'Jaws';
    const endpoint = service.createEndpoint(query);
    console.log(endpoint);
    const expectedEndpoint =
      'https://api.themoviedb.org/3/search/movie?page=1&api_key=057dfa32a18eed0f2dc23dc2e80ed8a0&include_adult=false&language=en-US&query=Jaws';
    expect(endpoint).toBe(expectedEndpoint);
  });
});

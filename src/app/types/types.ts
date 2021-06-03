export interface SearchOptions {
  page?: string;
  include_adult?: string;
  language?: string;
}

export interface SearchResult {
  overview?: string;
  release_date?: string;
  title?: string;
}

export interface SearchResults {
  page?: number;
  results?: SearchResult[];
  total_pages?: number;
  total_results?: number;
}

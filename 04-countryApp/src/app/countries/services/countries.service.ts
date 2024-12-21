import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, delay, map, Observable, of } from 'rxjs';
import { Country } from '../interfaces/country';

@Injectable({ providedIn: 'root' })
export class CountryService {

// Api -----> https://restcountries.com/

  private apiUrl: string = 'https://restcountries.com/v3.1';

  public cacheStore = {
    byCapital: {term: '', countries: []},
    byCountry: {term: '', countries: []},
    byRegion : {term: '', countries: []}
  };

  constructor(private http: HttpClient) {}

  // Private method to refactor repeated code in fetch methods
  private getCountriesRequest(url: string): Observable<Country[]> {
    return this.http.get<Country[]>(url)
      .pipe(
        // Catch error and return error as an empty array with of operator
        catchError( () => of([])),
      );
  }

  // https://restcountries.com/v3.1/alpha/{code}
  searchByAlphaCode(code: string): Observable<Country | null> { // return 1 country or null if it doesn't exist code
    const url = `${this.apiUrl}/alpha/${code}`;
    return this.http.get<Country[]>(url)
      .pipe(
        map(countries => countries.length > 0 ? countries[0] : null),
        catchError(() => of(null))
      );
  }

  // https://restcountries.com/v3.1/capital/{capital}
  searchByCapital(term: string): Observable<Country[]> {
    const url = `${this.apiUrl}/capital/${term}`;
    return this.getCountriesRequest(url);
  }

  // https://restcountries.com/v3.1/region/{region}
  searchByRegion(term: string): Observable<Country[]> {
    const url = `${this.apiUrl}/region/${term}`;
    return this.getCountriesRequest(url);
  }

  // https://restcountries.com/v3.1/name/{name}
  searchByCountryName(term: string): Observable<Country[]> {
    const url = `${this.apiUrl}/name/${term}`;
    return this.getCountriesRequest(url);
  }

}

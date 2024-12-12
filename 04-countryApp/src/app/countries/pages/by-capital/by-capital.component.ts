import { Component } from '@angular/core';
import { CountryService } from '../../services/countries.service';
import { Country } from '../../interfaces/country';

@Component({
  selector: 'countries-by-capital',
  templateUrl: './by-capital.component.html',
  styles: [
  ]
})
export class ByCapitalComponent {

  public placeholder: string = 'Enter capital name...';
  public countries: Country[] = [];

  constructor(private countriesService: CountryService) {}

  searchByCapital(term: string): void {
    this.countriesService.searchByCapital(term)
      .subscribe(countries => {
        this.countries = countries;
      })  
  }
}

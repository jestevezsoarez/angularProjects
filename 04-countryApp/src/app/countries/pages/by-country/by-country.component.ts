import { Component } from '@angular/core';
import { CountryService } from '../../services/countries.service';
import { Country } from '../../interfaces/country';

@Component({
  selector: 'countries-by-country',
  templateUrl: './by-country.component.html',
  styles: [
  ]
})
export class ByCountryComponent {

  public placeholder: string = 'Enter country name...';
  public countries: Country[] = [];

  constructor(private countriesService: CountryService) {}

  searchByCountryName(name: string): void {
    this.countriesService.searchByCountryName(name)
      .subscribe(countries => {
        this.countries = countries;
      })  
  }
}

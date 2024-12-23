import { Component, OnInit } from '@angular/core';
import { CountryService } from '../../services/countries.service';
import { Country } from '../../interfaces/country.interface';

@Component({
  selector: 'countries-by-country',
  templateUrl: './by-country.component.html',
  styles: [
  ]
})
export class ByCountryComponent implements OnInit{

  public placeholder: string = 'Enter country name...';
  public countries: Country[] = [];
  public initialValue: string = '';

  constructor(private countriesService: CountryService) {}

  ngOnInit(): void {
    this.countries = this.countriesService.cacheStore.byCountry.countries;
    this.initialValue = this.countriesService.cacheStore.byCountry.term;
  }

  searchByCountryName(name: string): void {
    this.countriesService.searchByCountryName(name)
      .subscribe(countries => {
        this.countries = countries;
      })  
  }
}

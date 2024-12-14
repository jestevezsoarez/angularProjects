import { Component } from '@angular/core';
import { Country } from '../../interfaces/country';
import { CountryService } from '../../services/countries.service';

@Component({
  selector: 'countries-by-region',
  templateUrl: './by-region.component.html',
  styles: [
  ]
})
export class ByRegionComponent {
  public placeholder: string = 'Enter region name...';
  public countries: Country[] = [];

  constructor(private countriesService: CountryService) {}

  searchByRegion(name: string): void {
    this.countriesService.searchByRegion(name)
      .subscribe(countries => {
        this.countries = countries;
      })  
  }
}

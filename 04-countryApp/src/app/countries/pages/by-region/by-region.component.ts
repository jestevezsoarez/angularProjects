import { Component } from '@angular/core';
import { Country } from '../../interfaces/country.interface';
import { CountryService } from '../../services/countries.service';
import { Region } from '../../interfaces/region.type';

@Component({
  selector: 'countries-by-region',
  templateUrl: './by-region.component.html',
  styles: [
  ]
})
export class ByRegionComponent {
  public placeholder: string = 'Enter region name...';
  public countries: Country[] = [];
  public regions: Region[] = ['Africa','Americas','Asia','Europe','Oceania'];
  public selectedRegion?: Region; // This attribute is optional in a certain moment in time

  constructor(private countriesService: CountryService) {}

  searchByRegion(name: Region): void {
    this.selectedRegion = name;
    this.countriesService.searchByRegion(name)
      .subscribe(countries => {
        this.countries = countries;
      })  
  }
}

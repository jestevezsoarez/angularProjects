import { Component, OnInit } from '@angular/core';
import { Country } from '../../interfaces/country.interface';
import { CountryService } from '../../services/countries.service';
import { Region } from '../../interfaces/region.type';

@Component({
  selector: 'countries-by-region',
  templateUrl: './by-region.component.html',
  styles: [
  ]
})
export class ByRegionComponent implements OnInit {
  public placeholder: string = 'Enter region name...';
  public countries: Country[] = [];
  public regions: Region[] = ['Africa','Americas','Asia','Europe','Oceania'];
  public selectedRegion?: Region; // This attribute is optional in a certain moment in time

  constructor(private countriesService: CountryService) {}

  ngOnInit(): void {
    this.countries = this.countriesService.cacheStore.byRegion.countries;
    this.selectedRegion = this.countriesService.cacheStore.byRegion.region;
  }

  searchByRegion(name: Region): void {
    this.selectedRegion = name;
    this.countriesService.searchByRegion(name)
      .subscribe(countries => {
        this.countries = countries;
      })  
  }
}

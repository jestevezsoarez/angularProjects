import { Component, OnInit } from '@angular/core';
import { CountryService } from '../../services/countries.service';
import { Country } from '../../interfaces/country.interface';

@Component({
  selector: 'countries-by-capital',
  templateUrl: './by-capital.component.html',
  styles: [
  ]
})
export class ByCapitalComponent implements OnInit {

  public placeholder: string = 'Enter capital name...';
  public countries: Country[] = [];
  public isLoading: boolean = false;
  public initialValue: string ='';

  constructor(private countriesService: CountryService) {}

  ngOnInit(): void {
    this.countries = this.countriesService.cacheStore.byCapital.countries;
    this.initialValue = this.countriesService.cacheStore.byCapital.term;
  }

  searchByCapital(term: string): void {
    this.isLoading = true;
    this.countriesService.searchByCapital(term)
      .subscribe(countries => {
        this.countries = countries;
        this.isLoading = false;
      })  
  }
}

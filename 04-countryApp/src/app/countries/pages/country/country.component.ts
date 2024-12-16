import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CountryService } from '../../services/countries.service';

@Component({
  selector: 'countries-country',
  templateUrl: './country.component.html',
  styles: [
  ]
})
export class CountryComponent implements OnInit{

  constructor(private activatedRoute: ActivatedRoute,
              private countryService: CountryService
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params
      .subscribe(params => {
        this.countryService.searchByAlphaCode(params['id'])
          .subscribe(country => {
            console.log(country);            
          });        
      })
  }
}

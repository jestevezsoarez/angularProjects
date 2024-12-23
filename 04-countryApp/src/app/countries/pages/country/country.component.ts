import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CountryService } from '../../services/countries.service';
import { switchMap } from 'rxjs';
import { Country } from '../../interfaces/country.interface';

@Component({
  selector: 'countries-country',
  templateUrl: './country.component.html',
  styles: [],
})
export class CountryComponent implements OnInit {
  public country?: Country; // country can be null

  constructor(
    private activatedRoute: ActivatedRoute,
    private countryService: CountryService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params
      .pipe(
        // SwitchMap returns an observable, so I can avoid Observer hell
        switchMap((params) =>
          this.countryService.searchByAlphaCode(params['id'])
        )
      )
      .subscribe((country) => {
        if(!country) {
          return this.router.navigateByUrl('');
        }
        return this.country = country;
      });
  }
}

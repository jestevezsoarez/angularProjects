import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CountriesRoutingModule } from './countries-routing.module';
import { SharedModule } from "../shared/shared.module";

import { ByCapitalComponent } from './pages/by-capital/by-capital.component';
import { ByCountryComponent } from './pages/by-country/by-country.component';
import { ByRegionComponent } from './pages/by-region/by-region.component';
import { CountryComponent } from './pages/country/country.component';



@NgModule({
    declarations: [
        ByCapitalComponent,
        ByCountryComponent,
        ByRegionComponent,
        CountryComponent
    ],
    imports: [
        CommonModule,
        CountriesRoutingModule,
        SharedModule,
    ]
})
export class CountriesModule { }

import { NgModule } from '@angular/core';

// Modules
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';

// Components
import { HomePageComponent } from './pages/home-page/home-page.component';
import { SearchComponent } from './components/search/search.component';
import { CardListComponent } from './components/card-list/card-list.component';
import { CardComponent } from './components/card/card.component';

@NgModule({
    declarations: [
    HomePageComponent,
    SearchComponent,
    CardListComponent,
    CardComponent
  ],
    imports: [
        CommonModule, // Sirve para pipes, ngIf, ngFor
        SharedModule
    ],
    exports: [HomePageComponent],
    providers: [],
})
export class GifsModule { }

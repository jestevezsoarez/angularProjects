import { NgModule } from "@angular/core";
import { BrowserModule } from '@angular/platform-browser';

import { ListComponent } from "./list/list.component";
import { HeroComponent } from "./hero/hero.component";


@NgModule({
    declarations: [
        HeroComponent,
        ListComponent
    ],
    imports: [
        BrowserModule
    ],
    exports: [
        HeroComponent,
        ListComponent
    ]
})
export class HeroesModule {}
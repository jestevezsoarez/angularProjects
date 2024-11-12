import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
    selector: 'gifs-search',
    templateUrl: './search.component.html'
})

export class SearchComponent {

    @ViewChild('txtTagInput')
    public tagInput!: ElementRef<HTMLInputElement>;

    searchTag(): void {
        const newTag = this.tagInput.nativeElement.value;
        console.log({newTag});
        
    }
}
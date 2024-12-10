import { Component, Input } from '@angular/core';

@Component({
  selector: 'shared-search',
  templateUrl: './search.component.html',
  styles: [
  ]
})
export class SearchComponent {

  @Input() placeholder: string = '';
}

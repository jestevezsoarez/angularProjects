import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'shared-search',
  templateUrl: './search.component.html',
  styles: [
  ]
})
export class SearchComponent {

  @Input()
  public placeholder: string = '';
  
  @Output()
  public onValue = new EventEmitter<string>()

  searchValue(value: string): void {
    this.onValue.emit(value);
  }
}

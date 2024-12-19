import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { debounceTime, Subject } from 'rxjs';

@Component({
  selector: 'shared-search',
  templateUrl: './search.component.html',
  styles: [
  ]
})
export class SearchComponent implements OnInit{

  
  private debouncer: Subject<string> = new Subject<string>();
  
  @Input()
  public placeholder: string = '';
  
  @Output()
  public onValue = new EventEmitter<string>();
  
  @Output()
  public onDebounce = new EventEmitter<string>();
  
  ngOnInit(): void {
    this.debouncer
    .pipe(
      debounceTime(300) // wait 300ms without writing to emit value
    )
    .subscribe( value => {
      this.onDebounce.emit(value);
    })
  }

  searchValue(value: string): void {
    this.onValue.emit(value);
  }

  onKeyPress(searchTerm: string) {
     this.debouncer.next(searchTerm);
  }
}

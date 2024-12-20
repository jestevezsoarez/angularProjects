import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { debounceTime, Subject } from 'rxjs';

@Component({
  selector: 'shared-search',
  templateUrl: './search.component.html',
  styles: [
  ]
})
export class SearchComponent implements OnInit, OnDestroy{
  
  
  private debouncer: Subject<string> = new Subject<string>();
  
  @Input()
  public placeholder: string = '';
  
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
  
  onKeyPress(searchTerm: string) {
    this.debouncer.next(searchTerm);
  }

  ngOnDestroy(): void {
    this.debouncer.unsubscribe();
  }
}

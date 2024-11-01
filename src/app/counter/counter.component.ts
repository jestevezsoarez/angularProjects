import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent { 
  public title: string = 'Hola Mundo';
  public counter: number = 10;

  onAdd(value: number): void {
    this.counter += value;
  }

  onSubtract(value: number): void {
    this.counter -= value;
  }

  onReset() {
    this.counter = 10;
  }
}
 
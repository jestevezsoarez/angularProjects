import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'dbz-list',
  templateUrl: 'list.component.html',
  styleUrls: ['./list.component.css'],
})
export class ListComponent {
  @Input() characters: Character[] = [];
  @Output() deleteCharacter: EventEmitter<number> = new EventEmitter();

  onDeleteCharacter(index: number): void {
    console.log(index);
    this.deleteCharacter.emit(index);
  }
}

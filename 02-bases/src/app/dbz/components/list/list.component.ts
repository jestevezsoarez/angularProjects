import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'dbz-list',
  templateUrl: 'list.component.html',
  styleUrls: ['./list.component.css'],
})
export class ListComponent {
  @Input() characters: Character[] = [];
  @Output() onDeleteCharacter: EventEmitter<number> = new EventEmitter();

  deleteCharacter(index: number) {
    console.log(index);
    this.onDeleteCharacter.emit(index);
  }
}

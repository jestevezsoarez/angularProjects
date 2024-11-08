import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'dbz-list',
  templateUrl: 'list.component.html',
  styleUrls: ['./list.component.css'],
})
export class ListComponent {
  @Input() characters: Character[] = [];
  @Output() deleteCharacter: EventEmitter<string> = new EventEmitter();

  onDeleteCharacter(id?: string): void {
    console.log(id);
    // Si el id no existe nunca llama al deleteCharacter
    if (!id) return;
    
    this.deleteCharacter.emit(id);
  }
}

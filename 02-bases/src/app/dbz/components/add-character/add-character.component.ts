import { Component, EventEmitter, Output } from '@angular/core';
import { v4 as uuidv4 } from 'uuid';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'dbz-add-character',
  templateUrl: './add-character.component.html',
  styleUrls: ['./add-character.component.css'],
})
export class AddCharacterComponent {
  @Output()
  onNewCharacter: EventEmitter<Character> = new EventEmitter();

  public character: Character = {
    id: '',
    name: '',
    power: 0,
  };

  emitCharacter(): void {
    console.log(this.character);
    const id = uuidv4();
     
    this.onNewCharacter.emit({
      id: id,
      name: this.character.name,
      power: this.character.power,
    });

    this.character.name = '';
    this.character.power = 0;
  }
}

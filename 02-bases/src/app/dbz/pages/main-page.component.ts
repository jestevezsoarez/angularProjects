import { Component } from '@angular/core';
import { Character } from '../interfaces/character.interface';

@Component({
  selector: 'dbz-main-page',
  templateUrl: 'main-page.component.html',
})
export class MainPageComponent {
  public characters: Character[] = [
    {
      name: 'Krillin',
      power: 1000,
    },
    {
      name: 'Goku',
      power: 9500,
    },
    {
      name: 'Vegeta',
      power: 7500,
    },
  ];

  public onNewCharacter(character: Character): void {
    console.log(character);
    // Si el nombre viene vacio no hago nada
    if (character.name.length === 0) return;
    this.characters.push(character);
  }

  public onDeleteCharacter(index: number): void {
    this.characters.splice(index, 1);
  }
}

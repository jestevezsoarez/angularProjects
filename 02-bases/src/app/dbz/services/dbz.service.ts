import { Injectable } from '@angular/core';
import { v4 as uuidv4 } from 'uuid';
import { Character } from '../interfaces/character.interface';


@Injectable({ 
    providedIn: 'root' 
})
export class DbzService {

  public characters: Character[] = [
    {
      id: uuidv4(),
      name: 'Krillin',
      power: 1000,
    },
    {
      id: uuidv4(),
      name: 'Goku',
      power: 9500,
    },
    {
      id: uuidv4(),
      name: 'Vegeta',
      power: 7500,
    },
  ];

  public addCharacter(character: Character): void {
    
    // Si el nombre viene vacio no hago nada
    if (character.name.length === 0) return;

    // Tomo todas las propiedades de character y las esparzo en un nuevo objeto y le agrego el id
    const newCharacter: Character = { id: uuidv4(), ...character };

    this.characters.push(character);
  }

  // Borrar por el indice es riesgoso por la concurrencia, entonces se usa uuid (codigo identificador)
  // public onDeleteCharacter(index: number): void {
  //   this.characters.splice(index, 1);
  // }

  deleteCharacterById(id: string) {
    this.characters = this.characters.filter(character => character.id !== id);
  }
}

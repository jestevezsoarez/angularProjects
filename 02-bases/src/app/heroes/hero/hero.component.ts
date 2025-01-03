import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css'],
})
export class HeroComponent {
  public name: string = 'ironman';
  public age: number = 45;

  get capitalizedName(): string {
    return this.name.toUpperCase();
  }

  getHeroDescription(): string {
    return `${ this.name } - ${ this.age }`;
  }

  // Cambia el nombre del heroe a Spiderman
  changeHero(): void {
    this.name = 'spiderman';
  }

  // Cambia la edad a 25
  changeAge(): void {
    this.age = 25;
  }

  reset(): void {
    this.name = 'ironman';
    this.age = 45;
  }
}

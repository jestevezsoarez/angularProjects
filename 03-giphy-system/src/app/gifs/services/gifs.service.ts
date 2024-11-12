import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root' // root para que sea global el servicio
})
export class GifsService {

  private _tagsHistory: string[] = [];

  constructor() { }

  get tagsHistory(): string[] {
    return [...this._tagsHistory]; // como los arreglos pasan por referencia en js retorno una copia con el operador spread
  }

  searchTag(tag: string): void {
    this._tagsHistory.unshift(tag);
  }

}

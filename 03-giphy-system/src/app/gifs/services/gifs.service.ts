import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root' // root para que sea global el servicio
})
export class GifsService {

  private _tagsHistory: string[] = [];

  constructor() { }

  get tagsHistory() {
    return [...this._tagsHistory]; // como los arreglos pasan por referencia en js retorno una copia con el operador spread
  }

  private organizeHistory(tag: string) {
    tag = tag.toLowerCase();

    if (this._tagsHistory.includes(tag)) {      
      this._tagsHistory = this._tagsHistory.filter((oldTag) => oldTag !== tag);
      console.log(this._tagsHistory);
    }
    this._tagsHistory = this._tagsHistory.splice(0, 9);
    
  }

  searchTag(tag: string): void {
    if (tag.length === 0) return;
    this.organizeHistory(tag);

    this._tagsHistory.unshift(tag); // unsift agrega al inicio del array
  }

}

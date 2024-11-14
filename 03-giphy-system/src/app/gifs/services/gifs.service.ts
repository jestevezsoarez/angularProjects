import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root', // root para que sea global el servicio
})
export class GifsService {
  private _tagsHistory: string[] = [];
  private apiKey: string = 'uwiy2NxdVdsk3m5DGWgvUCIXNKxVCBf3';

  constructor() {}

  get tagsHistory() {
    return [...this._tagsHistory]; // como los arreglos pasan por referencia en js retorno una copia con el operador spread
  }

  private organizeHistory(tag: string) {
    tag = tag.toLowerCase();

    if (this._tagsHistory.includes(tag)) {
      this._tagsHistory = this._tagsHistory.filter((oldTag) => oldTag !== tag);
      this._tagsHistory.unshift(tag); // unsift agrega al inicio del array
      this._tagsHistory = this._tagsHistory.splice(0, 9);
    }
  }

  // esta es una forma de hacer peticiones http con fetch
  async searchTag(tag: string): Promise<void> {
    if (tag.length === 0) return;
    this.organizeHistory(tag);
    // el fetch regresa una promesa
    fetch('https://api.giphy.com/v1/stickers/search?api_key=uwiy2NxdVdsk3m5DGWgvUCIXNKxVCBf3&q=superman&limit=20')
      .then(resp => resp.json()) 
      .then (data => console.log(data));
  }
}

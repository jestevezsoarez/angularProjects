import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Gif, SearchResponse } from '../interfaces/gifs.interfaces';

@Injectable({
  providedIn: 'root', // root para que sea global el servicio
})
export class GifsService {
  public gifList: Gif[] = [];

  private _tagsHistory: string[] = [];
  private apiKey: string = 'uwiy2NxdVdsk3m5DGWgvUCIXNKxVCBf3';
  private serviceUrl = 'https://api.giphy.com/v1/stickers';

  constructor(private http: HttpClient) {}

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

  async searchTag(tag: string): Promise<void> {
    if (tag.length === 0) return;
    this.organizeHistory(tag);

    // Los query params se pueden agregar a un objeto HttpParams
    const params = new HttpParams()
      .set('api_key', this.apiKey)
      .set('limit', '10')
      .set('q', tag);

    this.http.get<SearchResponse>(`${this.serviceUrl}/search`, { params: params })
      .subscribe((resp) => {
        this.gifList = resp.data;
        console.log(this.gifList);
      });
  }
}

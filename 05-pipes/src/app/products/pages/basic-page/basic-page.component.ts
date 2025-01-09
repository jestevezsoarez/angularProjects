import { Component } from '@angular/core';

@Component({
  selector: 'app-basic-page',
  templateUrl: './basic-page.component.html',
  styles: [
  ]
})
export class BasicPageComponent {

  public nameLower: string = 'javier';
  public nameUpper: string = 'JAVIER';
  public fullName: string = 'jAvIEr eSTevEZ';
  public price: number = 12345.6789;

  public customDate: Date = new Date();
}

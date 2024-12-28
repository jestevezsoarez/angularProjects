import { Component } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'shared-menu',
  templateUrl: './menu.component.html',
  styles: [
  ]
})
export class MenuComponent {
  public menuItems: MenuItem[] = [];

  ngOnInit() {
      this.menuItems = [
          {
              label: 'Angular Pipes',
              icon: 'pi pi-desktop',
              items: [
                {
                  label: 'Dates and Texts',
                  icon: 'pi pi-dollar'
                },
                {
                  label: 'Numbers',
                  icon: 'pi pi-dollar'
                },
                {
                  label: 'Rare',
                  icon: 'pi pi-globe'
                }
              ]
          }
      ];
  }
}

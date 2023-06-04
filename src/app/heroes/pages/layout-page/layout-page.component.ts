import { Component } from '@angular/core';

@Component({
  selector: 'app-layout-page',
  templateUrl: './layout-page.component.html',
  styles: [
  ]
})
export class LayoutPageComponent {

  public sidebarItems = [
    {lablel: 'Listado', icon: 'label', url: './list' },
    {lablel: 'Agregar', icon: 'add', url: './new-hero' },
    {lablel: 'Buscar', icon: 'search', url: './search' },
  ];

}

import { Component, OnInit } from '@angular/core';
import { Hero } from '../../interfaces/hero.interface';
import { ServiceHeroService } from '../../services/heroes.service.ts.service';

@Component({
  selector: 'app-list-page',
  templateUrl: './list-page.component.html',
  styles: [
  ]
})
export class ListPageComponent implements OnInit {

  public heroes: Hero[] = [];

  constructor(
    private heroesService: ServiceHeroService
  ){}

  ngOnInit(): void {
    this.heroesService.getHeroes().subscribe(respuesta => this.heroes = respuesta);
  }


}

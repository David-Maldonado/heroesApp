import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Hero } from '../../interfaces/hero.interface';
import { ServiceHeroService } from '../../services/heroes.service.ts.service';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';

@Component({
  selector: 'app-seatch-page',
  templateUrl: './seatch-page.component.html',
  styles: [
  ]
})
export class SeatchPageComponent {

//los servicios se inyectan, no se instancian.
  constructor(
    private heroService: ServiceHeroService
  ){}

  public searchInput = new FormControl('');

  public heroes: Hero[] = [];
  public selectedHero?: Hero;


  searchHero(){
    //? no es tan recomendable ! en algunos casos donde necesitamos un string vacio.
    const value: string = this.searchInput.value || '';

    this.heroService.getSuggestions(value)
      .subscribe( hero => this.heroes = hero );

  }

  onSelectedOption(event: MatAutocompleteSelectedEvent): void{
      if(!event.option.value)
      {
        this.selectedHero = undefined;
        return;
      }
      const hero: Hero = event.option.value;
      this.searchInput.setValue(hero.superhero);
      this.selectedHero = hero;
  }

}

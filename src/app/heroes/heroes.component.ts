import { Component } from '@angular/core';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';
import { NgFor, NgIf, UpperCasePipe } from '@angular/common';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css'],
  standalone: true,
  imports: [
    FormsModule,
    NgFor,
    NgIf,
    UpperCasePipe
  ],
}) 
export class HeroesComponent {
  
  heroes: Hero[] = [];
  selectedHero?: Hero;
  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }
  constructor(private heroService: HeroService) {}
  getHeroes(): void {
    this.heroes = this.heroService.getHeroes();
  }
};

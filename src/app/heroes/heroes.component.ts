import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements onInit {
  
hero: Hero = {
  id: 1,
  name: 'Windstorm'
};
constructor() { }
ngonInit(): void {}
} 

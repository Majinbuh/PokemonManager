import { Component } from '@angular/core';
import {NgForOf} from "@angular/common";

@Component({
  selector: 'app-pokemons',
  standalone: true,
    imports: [
        NgForOf
    ],
  templateUrl: './pokemons.component.html',
  styleUrl: './pokemons.component.css'
})
export class PokemonsComponent {

    public pokemons: Array<any>;

    constructor() {
      this.pokemons = [];
      this.addPokemon();
    }

    protected addPokemon() {
        this.pokemons.push({nb: "001", name: "Bulbizarre", category: "graine", type: "plante et poison", taille: "70 centimètres", poids: "6,9 kilogrammes"});
        this.pokemons.push({nb: "002", name: "Herbizarre", category: "graine", type: "plante et poison", taille: "1 mètre", poids: "13 kilogrammes"});
        this.pokemons.push({nb: "003", name: "Florizarre", category: "graine", type: "plante et poison", taille: "2 mètres", poids: "100 kilogrammes"});
        this.pokemons.push({nb: "004", name: "Salamèche", category: "lézard", type: "feu et vol", taille: "60 centimètres", poids: "8,5 kilogrammes"});
        this.pokemons.push({nb: "005", name: "Reptincel", category: "flamme", type: "feu et vol", taille: "1,1 mètre", poids: "19 kilogrammes"});
        this.pokemons.push({nb: "004", name: "Dracaufeu", category: "flamme", type: "feu et vol", taille: "1.7 mètre", poids: "90,5 kilogrammes"})
    }

}

import { Routes } from '@angular/router';
import {GenerationsComponent} from "./components/generations/generations.component";
import {PokemonsComponent} from "./components/pokemons/pokemons.component";

export const routes: Routes = [
    {path:"", component: PokemonsComponent},
];

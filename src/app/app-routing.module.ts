import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PokemonsComponent } from './components/pokemons/pokemons.component';
import { PokemonComponent } from './components/pokemon/pokemon.component';

const routes: Routes = [
  {path: 'Pokemons', component:PokemonsComponent},
  {path: 'Pokemon', component:PokemonComponent},
  {path: '**', pathMatch: 'full', redirectTo:'Pokemons'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

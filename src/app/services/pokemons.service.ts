import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PokemonsService {

  constructor(public httpClient: HttpClient) { }

  getPokemons(conteo:number) {
    return this.httpClient.get("https://pokeapi.co/api/v2/pokemon?limit=100&offset="+conteo);
  }

  getPokemon(nombre: string) {
    return this.httpClient.get(`https://pokeapi.co/api/v2/pokemon/${nombre}`);
  }
}

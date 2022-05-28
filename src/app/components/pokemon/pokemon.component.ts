import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PokemonsService } from 'src/app/services/pokemons.service';

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.css']
})
export class PokemonComponent implements OnInit {
  nombre:string;
  pokemon:any;
  constructor(public activatedRoute:ActivatedRoute, private consulta:PokemonsService) { 
    this.activatedRoute.params.subscribe(params=>{
      this.consulta.getPokemon(params['nombre']).subscribe((res: any) => {
        this.nombre = params['nombre'];
        this.pokemon = res;
        console.log(this.pokemon);
        console.log(this.pokemon.sprites.front_default)
      });  
    })
  }

  ngOnInit(): void {
  }

}

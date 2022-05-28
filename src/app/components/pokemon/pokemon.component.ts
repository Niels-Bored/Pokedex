import { HttpErrorResponse } from '@angular/common/http';
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
  tipos : any[] = [];
  habilidades : any[] = [];
  juegos : any[] = [];
  mostrar : boolean;
  constructor(public activatedRoute:ActivatedRoute, private consulta:PokemonsService) { 
    this.activatedRoute.params.subscribe(params=>{
      this.nombre = params['nombre'];
      this.consulta.getPokemon(params['nombre']).subscribe((res: any) => {
        this.pokemon = res;
        this.tipos = this.pokemon.types;
        this.habilidades = this.pokemon.abilities;
        this.juegos = this.pokemon.game_indices;
        console.log(this.pokemon);
        console.log(this.pokemon.sprites.front_default)
        console.log(this.habilidades);
        console.log(this.juegos);
        this.mostrar = true;
      }, (error:any) =>{
        console.log("Ha habido un problema");
        this.mostrar = false;
      });  
    })
  }

  ngOnInit(): void {
  }

}

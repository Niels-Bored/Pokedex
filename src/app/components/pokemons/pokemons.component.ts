import { variable } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PokemonsService } from 'src/app/services/pokemons.service';

@Component({
  selector: 'app-pokemons',
  templateUrl: './pokemons.component.html',
  styleUrls: ['./pokemons.component.css']
})
export class PokemonsComponent implements OnInit {
  datos : any;
  anterior : any;
  siguiente : any;
  nombre : any;
  pokemones : any[] = [];
  conteo : number = 0;
  imagenes : any[] = [];

  constructor(public consulta:PokemonsService, public router:Router) { 
    this.cargarDatos();
  }

  cargarDatos(){
    this.consulta.getPokemons(this.conteo).subscribe((res: any) => {
      this.datos = res;
      this.anterior = this.datos.previous;
      this.siguiente = this.datos.next;
      this.pokemones = this.datos.results;

      this.pokemones.forEach(
        function(pokemon){
          console.log(pokemon.name);
          /*consulta.getPokemon(pokemon.name).subscribe((res: any) => {
            console.log(res.sprites.front_default);
          });*/
        }
      );
      
    });
  }

  anteriorBloque(){
    if(this.anterior!=null){
      this.conteo -= 100;
      this.cargarDatos();
    }
  }
  siguienteBloque(){
    if(this.siguiente!=null){
      this.conteo += 100;
      this.cargarDatos();
    }
  }

  buscarPokemon(nombre:string){
    this.router.navigate(['/Pokemon',nombre]);
  }

  ngOnInit(): void {
  }

}

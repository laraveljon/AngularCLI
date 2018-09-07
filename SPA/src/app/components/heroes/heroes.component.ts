import { Component, OnInit } from '@angular/core';
// se iporta lo que es la clase y la interface para galasr los tipod de metodo y
// y que tipo de variable es
import { HeroesService,Heroe } from '../../servicios/heroes.services';

import {Router} from '@angular/router';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  //styles: []
})
export class HeroesComponent implements OnInit {

       // se realiza un array vacío,
       // pero se rremplaza  a:
       //heroes:any[] =[];
       // a esto:
       heroes:Heroe[] =[];

  constructor( private _heroesService:HeroesService,
               private router:Router

               ) {

    console.log("Hola mundo Construcor");
   }

  ngOnInit() {
    //console.log("Hola mundo ngOnInit");
    // llama el metodo del arreglo si es igual lama a los heroes que seria elparametro
    // del constructor y llama lo que es la clase exportada el metodo get que se encentra
    // en esta clase...
    this.heroes =this._heroesService.getHeroes();

    //seimprime lo que se tre del data

    //console.log(this.heroes);
  }
  verHeroe( idx:number ){

    console.log(idx);
    this.router.navigate( ['/heroe',idx] );

  }

}

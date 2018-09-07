import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroesService } from '../../servicios/heroes.services';
@Component({
  selector: 'app-buscador',
  templateUrl: './buscador.component.html'
})
export class BuscadorComponent implements OnInit {
    heroes:any[] =[];
    termino:string;
  constructor( private activatedRoute:ActivatedRoute,
               private _heroesService:HeroesService,) {


   }

  ngOnInit() {

    this.activatedRoute.params.subscribe( params =>{
      // el  termino proviene de :   {path:'buscar/:termino', component: BuscadorComponent },
      //console.log(params['termino']);
      this.termino = params['termino'];
      this.heroes =this._heroesService.buscarHeroes( params['termino']);
      console.log( this.heroes )
    })
  }

}

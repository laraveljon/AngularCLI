import { Component, OnInit } from '@angular/core';
// en sta parte solamente se importa o que es adorno y el
//ActivatedRoute
import { ActivatedRoute} from '@angular/router';

import {HeroesService} from '../../servicios/heroes.services';
@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
})
export class HeroeComponent {
  // se raliza un objeto local de tipo any
  heroe:any={};
  // se crea un parametro para llamar una varoable de tipo private y
  // asignar la importacion del route
  constructor( private activatedRoute:ActivatedRoute,
               private _heroesServices:HeroesService
     ) {
     //params es un observador de parametros
     this.activatedRoute.params.subscribe( params=>{
       //console.log(params['id']);
       this.heroe=this._heroesServices.getHeroe( params['id']);
       console.log(this.heroe);
     });
  }


}

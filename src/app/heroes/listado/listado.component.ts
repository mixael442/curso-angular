import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  
})
export class ListadoComponent  {

  heroes: string[] = ["spiderman", "hulk", "thor", "iron-man"];
  heroeBorrado:string|undefined ="";

  borrarElemento(){
    this.heroeBorrado = this.heroes.shift() || ""; 
  }
}

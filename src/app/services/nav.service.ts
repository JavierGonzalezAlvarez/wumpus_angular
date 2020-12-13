import { createUrlResolverWithoutPackagePrefix } from '@angular/compiler';
import { Injectable } from '@angular/core';

import { Grilla } from '../clases/Grilla';
//import { Jugadores } from '../../clases/Jugadores';

import { Router } from "@angular/router"

@Injectable({
  providedIn: 'root'
})
export class NavService {

  constructor(private router:Router) { }

  clickInicio() {    
    console.log("click inicio")    
    //asignar posiciones aleatorias
    this.getJSONaleatorio() 
    //cargar cazador en casilla (1)        
    //this.getPosicion(1)    
  }    
  
  getJSONaleatorio() {
    //crear objeto: disparos y celdas
    let casillas = new Grilla(10, [[1],[2],[3],[4],[5],[6],[7],[8],[9],[10],[11],[12],[13],[14],[15],[16]])  
    //actores
    let actores: string[] = ["wumpus", "pozo1", "pozo2", "oro"]
    //asignar jugadores (but cazador) en posiciones aleatoriamente dentro de la grilla
    //la casilla 1 no puede estar incluida, siendo la casilla para el cazador    
    let aleatorias = [1,2,3,4]  //indice
    let posicion = {}
    for (let asignar of actores) {
      console.log(asignar)
      //const numero_aleatorio = Math.floor(Math.random() * (aleatorias.length - 1)) + 0;     
      const numero_aleatorio = Math.floor(Math.random() * 16) + 1;           
      //mapeo del array en un objeto      
      aleatorias.forEach(item => posicion[numero_aleatorio] = asignar);
      //pasar a json
      let posicion_json = JSON.stringify(posicion)            
      console.log(posicion_json)      
    }        
  }

  //cargar cazador en casilla (1)           
  getPosicion(casilla1: Number) {
      casilla1 = 1
      console.log("Cazador en celda :" + casilla1)
    return casilla1    
  }

  clickLanzar() {
    console.log("click lanzar flecha")
  }

  clickAdelante() {
    console.log("click adelante")
  }

  clickAtras() {    
    console.log("click atras")
  }

  clickAbajo() {    
    console.log("click abajo")
  }

  clickArriba() {    
    console.log("click arriba")
  }

  clickBack() {    
    console.log("click back")
    this.router.navigate(['/'])     
  }

  clickInstrucciones() {    
    console.log("click instrucciones")
    this.router.navigate(['/help'])        
  }


}

import { createUrlResolverWithoutPackagePrefix } from '@angular/compiler';
import { Injectable } from '@angular/core';

import { Grilla } from '../clases/Grilla';
import { Acciones } from '../clases/Acciones';
//import { Jugadores } from '../../clases/Jugadores';

import { Router } from "@angular/router"
import { Observable } from 'rxjs';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class NavService {  
  constructor(private router:Router) {           
   }

  clickInicio() {        
    console.log("click inicio")         
    //crear objeto: disparos y celdas
    let casillas = new Grilla(10, [[1],[2],[3],[4],[5],[6],[7],[8],[9],[10],[11],[12],[13],[14],[15],[16]])          
    //asignar jugadores (but cazador) en posiciones aleatoriamente dentro de la grilla. Casilla 1 no incluida, para el cazador    
    let actores: string[] = ["wumpus", "pozo1", "pozo2", "oro"]
    this.getJSONaleatorio(actores)     
    //posicionar cazador en casilla (1), suma 1 en la función            
    this.getPosicion(1)             
    //acciones que se pueden realizar dentro de cada celda
    let accion = new Acciones()
    accion.getAcciones()        
  }    
  
  getJSONaleatorio(actores_param) {                       
    let aleatorias = [0,1,2,3]  //indice    
    let posicion = {}
    for (let asignar of actores_param) {
      console.log(asignar)      
      //const numero_aleatorio = Math.floor(Math.random() * (aleatorias.length - 1)) + 0;           
      const numero_aleatorio = Math.floor(Math.random() * 15) + 2;           
      //mapeo del array en un objeto      
      aleatorias.forEach(item => posicion[numero_aleatorio] = asignar);      
    } 
    //pasar a json    
    let posicion_json = JSON.stringify(posicion)                 
    console.log("actores en posiciones: "+ posicion_json)
    return posicion_json    
  }

  //pasar valor de servicio a componente updated
  //crear variable que observa un numero. $i indica que es u observable
  public pos$ = new Subject<number>()
  //usamos un array como base de datos de la posicion. declarar fuera de la funcion
  celda_cazador: number[] = []    
  getPosicion(casilla: number) {                      
    let celda = this.celda_cazador.push(casilla)                  
    //suma total del array      
    let suma = this.celda_cazador.reduce((a, b) => a + b, 0)                    
    console.log("el cazador se encuentra en la casila (servicio): " + suma)
    
    //emitir evento de resultado
    //this.pos$.next(0)    
    this.pos$.next(suma)
         
    return suma
  }
  
  //obtener el observable
  getPosicion1$(): Observable<number> {    
    return this.pos$.asObservable()    
  }

  clickLanzar() {
    console.log("click lanzar flecha")
  }

  clickAdelante() {
    console.log("click adelante")
    let celda = this.getPosicion(1)    
    //restricciones
  }

  clickAtras() {    
    console.log("click atras")
    let celda = this.getPosicion(-1)    
    //restricciones
  }

  clickAbajo() {    
    console.log("click abajo")
    //obtener posicion
    let celda = this.getPosicion(0)
    if (celda == 1 || celda == 2 || celda == 3 || celda == 4 ||
      celda == 5 || celda == 6 || celda == 7 || celda == 8 || 
      celda == 8 || celda == 10 || celda == 11 || celda == 12) {
        let celda = this.getPosicion(4)      
    }
  }

  clickArriba() {    
    console.log("click arriba")
    //obtener posicion    
    let celda = this.getPosicion(0)
    if (celda == 16 || celda == 15 || celda == 14 || celda == 13 ||
      celda == 12 || celda == 11 || celda == 10 || celda == 9 ||
      celda == 8 || celda == 7 || celda == 6 || celda == 5) {
        let celda = this.getPosicion(-4)      
    }
  }

  clickBack() {    
    console.log("click back")
    this.router.navigate(['/'])     
  }

  clickInstrucciones() {    
    console.log("click instrucciones")
    this.router.navigate(['/help'])        
  }
   
  clickSalir() {    
    console.log("click salir")
    location.reload()    
  }

}


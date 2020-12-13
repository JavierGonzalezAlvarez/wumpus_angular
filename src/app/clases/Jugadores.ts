import { findLast } from '@angular/compiler/src/directive_resolver';

//registramos la clase Grilla
export class Jugadores  {
    
    //atributos
    jugadores_inicio: string []
    posicion_inicial: number [][]       

    constructor(
        jugadores: string [],
        inicio: number [][]) {           
           this.jugadores_inicio = jugadores,
           this.posicion_inicial = inicio           
        }
}
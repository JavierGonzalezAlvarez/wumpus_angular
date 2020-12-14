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
import { findLast } from '@angular/compiler/src/directive_resolver';

//registramos la clase Grilla
export class Grilla  {
    
    //atributos
    numero_flechas: number    
    numero_celdas: number[][]    

    constructor(                
        flechas: number,
        celdas: number[][]) {           
           this.numero_flechas = flechas
           //crear matriz unidimensional                                 
           this.numero_celdas = celdas
           
           //posiciones
           //console.log(celdas[0])            
        }
}
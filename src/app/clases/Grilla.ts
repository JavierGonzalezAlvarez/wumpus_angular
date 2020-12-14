export class Grilla  {   
    //atributos
    numero_flechas: number    
    numero_celdas: number[][]         
    constructor(flechas: number, celdas: number[][]) {           
        this.numero_flechas = flechas
        //crear matriz unidimensional                                 
        this.numero_celdas = celdas                      
    }    
}
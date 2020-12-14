export class Acciones {
    //atributos
    posicion: number    
    accions: any

    constructor() {}

    getAcciones(){
      let c1 = [1, [["Avanzar", 1],["Bajar", 4]]]

      let c2 = [2, [["Avanzar", 1],["Bajar", 4],["Retroceder",-1]]]
      let c3 = [3, [["Avanzar", 1],["Bajar", 4],["Retroceder",-1]]]

      let c4 = [4, [["Bajar", 4],["Retroceder",-1]]]
      
      let c5 = [5, [["Avanzar", 1],["Bajar", 4],["Subir",-4]]]
      let c9 = [9, [["Avanzar", 1],["Bajar", 4],["Subir",-4]]]

      let c6 = [6, [["Avanzar", 1],["Bajar", 4],["Retroceder",-1], ["Subir",-4]]]
      let c7 = [7, [["Avanzar", 1],["Bajar", 4],["Retroceder",-1], ["Subir",-4]]]
      let c10 = [10, [["Avanzar", 1],["Bajar", 4],["Retroceder",-1], ["Subir",-4]]]
      let c11 = [11, [["Avanzar", 1],["Bajar", 4],["Retroceder",-1], ["Subir",-4]]]
      
      let c8 = [8, [["Subir", -4],["Bajar", 4],["Retroceder",-1]]]      
      let c12 = [12, [["Subir", -4],["Bajar", 4],["Retroceder",-1]]]      
            
      let c13 = [13, [["Avanzar", 1],["Subir", -4]]]

      let c14 = [14, [["Avanzar", 1],["Subir", -4],["Retroceder",-1]]]
      let c15 = [15, [["Avanzar", 1],["Subir", -4],["Retroceder",-1]]]
      
      let c16 = [16, [["Subir", -4],["Retroceder",-1]]]
            
      const celdas = c1.concat(c2,c3,c4,c5,c6,c7,c8,c9,c10,c11,c12,c13,c14,c15,c16)

      console.log(celdas)
      return celdas
    }
        
}

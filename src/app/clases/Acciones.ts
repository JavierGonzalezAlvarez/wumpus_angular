export class Acciones {
    //atributos
    //posicion: number    
    //accions: any

    constructor() {}

    getAcciones(){

      //posicion, casilla avance, casilla atras
      //array de objetos. definimos tipo dado que habrá que hacer comparaciones
      let celdas: interfaceCelda[] = [
        {id:1, acciones:[2,5]},
        {id:2, acciones:[3,6,1]},
        {id:3, acciones:[4,7,2]},
        {id:4, acciones:[8,3]},
        {id:5, acciones:[6,9,1]},
        {id:9, acciones:[10,13,5]},
        {id:6, acciones:[7,10,5,2]},
        {id:7, acciones:[8,11,6,3]},
        {id:10, acciones:[11,14,9,6]},
        {id:11, acciones:[12,15,10,7]},        
        {id:8, acciones:[4,12,7]},
        {id:12, acciones:[8,16,11]},
        {id:13, acciones:[14,9]},
        {id:14, acciones:[15,10,13]},
        {id:15, acciones:[16,11,14]},
        {id:16, acciones:[12,15]},
      ]
      return celdas
      
        /*
        {id:1, acciones:[["Avanzar", 2],["Bajar", 5]]},
        {id:2, acciones:[["Avanzar", 3],["Bajar", 6],["Retroceder",1]]},
        {id:3, acciones:[["Avanzar", 4],["Bajar", 7],["Retroceder",2]]},
        {id:4, acciones:[["Bajar", 8],["Retroceder",3]]},
        {id:5, acciones:[["Avanzar", 6],["Bajar", 9],["Subir",1]]},
        {id:9, acciones:[["Avanzar", 10],["Bajar", 13],["Subir",5]]},
        {id:6, acciones:[["Avanzar", 7],["Bajar", 10],["Retroceder",5], ["Subir",2]]},
        {id:7, acciones:[["Avanzar", 8],["Bajar", 11],["Retroceder",6], ["Subir",3]]},
        {id:10, acciones:[["Avanzar", 11],["Bajar", 14],["Retroceder",9], ["Subir",6]]},
        {id:11, acciones:[["Avanzar", 12],["Bajar", 15],["Retroceder",10], ["Subir",7]]},        
        {id:8, acciones:[["Subir", 4],["Bajar", 12],["Retroceder",7]]},
        {id:12, acciones:[["Subir", 8],["Bajar", 164],["Retroceder",11]]},
        {id:13, acciones:[["Avanzar", 14],["Subir", 9]]},
        {id:14, acciones:[["Avanzar", 15],["Subir", 10],["Retroceder",13]]},
        {id:15, acciones:[["Avanzar", 16],["Subir", 11],["Retroceder",14]]},
        {id:16, acciones:[["Subir", 12],["Retroceder",15]]},
        */      
    }
        
}

export interface interfaceCelda {
  id: number;
  acciones: number[];  
}

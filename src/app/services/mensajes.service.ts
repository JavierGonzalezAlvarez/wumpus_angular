import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MensajesService {

  constructor() { }
           
    mensaje1 = {
        id: 1,
        accion: "pozo cerca",
        mensaje: "se percibe una brila"
      }

    mensaje2 = { 
        id: 2,
        accion: "oro cerca",
        mensaje: "se percibe un brillo"
      }

    mensaje3 =  { 
        id: 3,
        accion: "matar a wumpus",
        mensaje: "grito"
    }

    mensaje4 =  { 
        id: 4,
        accion: "en la casilla con wumpus",
        mensaje: ""
    }
    
    mensaje5 ={ 
        id: 5,
        accion: "wumpus en la casila de la lado",
        mensaje: "se percibe un hedor"
    }
    
    mensaje6 ={ 
        id: 6,
        accion: "muro al lado",
        mensaje: "se percibe un choque"
    }
        
}

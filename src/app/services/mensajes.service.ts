import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MensajesService {

  constructor() {}
              
  getMensajes(){    
    
    let mensajes = [
      {id:1, actor:"pozo1", mensaje1:["pozo1 cerca", "se percibe una brisa"], mensaje2:["en el pozo1", "game over"]},
      {id:2, actor:"pozo2", mensaje1:["pozo2 cerca", "se percibe una brisa"], mensaje2:["en el pozo2", "game over"]},
      {id:3, actor:"oro", mensaje1:["oro cerca", "se percibe un brillo"], mensaje2:["oro en la mano", "you get it!!"]},
      {id:4, actor:"wumpus", mensaje1:["wumpus cerca", "se percibe un hedor"], mensaje2:["matar a wumpus", "grito de wumpus"], mensaje3:["en la casilla con wumpus", "game over"]},      
    ]
    console.log(mensajes)
    return mensajes

    /*
    let m1 = [1, "pozo", ["pozo cerca", "se percibe una brisa"],["en el pozo", "game over"]]    
    let m2 = [2, "oro", ["oro cerca", "se percibe un brillo"],["oro en la mano", "you get it!!"]]
    let m3 = [3, "wumpus", ["wumpus cerca", "se percibe un hedor"],["matar a wumpus", "grito de wumpus"],["en la casilla con wumpus", "game over"]]    
    const mensajes = m1.concat(m2,m3)
    console.log(mensajes)
    */
       
    /*  
    mensajes1 = {"id":1,"accion":"pozo cerca","mensaje":"se percibe una brisa"}
    mensajes2 = {"id":2,"accion":"oro cerca","mensaje":"se percibe un brillo"}
    mensajes3 = {"id":3,"accion":"matar a wumpus","mensaje":"grito"}
    mensajes4 = {"id":4,"accion":"en la casilla con wumpus","mensaje": "estás muerto"}
    mensajes6 = {"id":5,"accion": "coger el oro","mensaje": "tienes el oro"}
    p:string = JSON.stringify({"id":1,"accion":"pozo cerca","mensaje":"se percibe un brillo"})
    */      
  }

}

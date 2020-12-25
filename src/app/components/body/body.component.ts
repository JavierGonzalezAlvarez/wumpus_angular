//import { calcPossibleSecurityContexts } from '@angular/compiler/src/template_parser/binding_parser';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { assert } from 'console';
import { element } from 'protractor';
//import { Grilla } from '../../clases/Grilla';
//import { Jugadores } from '../../clases/Jugadores';

import { Acciones } from '../../clases/Acciones';

import { MensajesService } from "../../services/mensajes.service";
import { NavService } from "../../services/nav.service";
//import { Observable } from 'rxjs';
//import { parseLazyRoute } from '@angular/compiler/src/aot/lazy_routes';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.scss']
})

export class BodyComponent implements OnInit, OnDestroy {  
    //total_casillas = 16;          
    //pintar la tabla y actualizar el color de la celda indicando la celda en la que esta el cazador    
    c1 = []
    c2 = []
    c3 = []
    c4 = []
    sum = []
    //almacenar el observable
    pos$: number  
    posJson$: String      
    //p: number
    //
    isTrue: boolean = true    
    
    constructor(public mensajesService: MensajesService, public navService: NavService) {                    
            
      let activado: boolean = false            
      let isTrue = true
            
      this.navService.getPosicion1$().subscribe(data => {
        this.pos$=data        
        console.log("valor observable en componente :" + this.pos$)                            
        
        let p = this.pos$
        //console.log(p)                                     
  
        let numbersF1 = [[false, 1], [false, 2], [false, 3], [false, 4]]
        let numbersF2 = [[false, 5], [false, 6], [false, 7], [false, 8]]
        let numbersF3 = [[false, 9], [false, 10], [false, 11], [false, 12]]
        let numbersF4 = [[false, 13], [false, 14], [false, 15], [false, 16]]      
                          
        if (p === 1) {
          activado = true
          let numbersF1 = [[activado,1], [false,2], [false,3], [false,4]]
          //inicializar repintado
          this.c1=[]
          this.c2=[]
          this.c3=[]
          this.c4=[]
          //
          this.c1.push(numbersF1) 
          this.c2.push(numbersF2) 
          this.c3.push(numbersF3) 
          this.c4.push(numbersF4)          
          console.log(this.c1)             
          console.log("pintada la celda: "+ p + " como '" + activado +"'")      
        } else if (p === 2) {
          activado = true      
          let numbersF1 = [[false,1], [activado,2], [false,3], [false,4]]      
          //inicializar repintado
          this.c1=[]
          this.c2=[]
          this.c3=[]
          this.c4=[]
          //
          this.c1.push(numbersF1) 
          this.c2.push(numbersF2) 
          this.c3.push(numbersF3) 
          this.c4.push(numbersF4)  
          console.log(this.c1)         
          console.log("pintada la celda: "+ p + " como '" + activado +"'")            
        } else if (p === 3) {
          activado = true      
          let numbersF1 = [[false,1], [false,2], [activado,3], [false,4]]      
          //inicializar
          this.c1=[]
          this.c2=[]
          this.c3=[]
          this.c4=[]
          //
          this.c1.push(numbersF1) 
          this.c2.push(numbersF2) 
          this.c3.push(numbersF3) 
          this.c4.push(numbersF4)  
          console.log(this.c1)         
          console.log("pintada la celda: "+ p + " como '" + activado +"'")            
        } else if (p === 4) {
          activado = true                
          let numbersF1 = [[false,1], [false,2], [false,3], [activado,4]]      
          //inicializar
          this.c1=[]
          this.c2=[]
          this.c3=[]
          this.c4=[]
          //
          this.c1.push(numbersF1) 
          this.c2.push(numbersF2) 
          this.c3.push(numbersF3) 
          this.c4.push(numbersF4)  
          console.log(this.c1)         
          console.log("pintada la celda: "+ p + " como '" + activado +"'")            
        } else if (p === 5) {
          activado = true      
          let numbersF2 = [[activado,5], [false,6], [false,7], [false,8]]      
          //inicializar
          this.c1=[]
          this.c2=[]
          this.c3=[]
          this.c4=[]
          //
          this.c1.push(numbersF1) 
          this.c2.push(numbersF2)         
          this.c3.push(numbersF3) 
          this.c4.push(numbersF4)  
          console.log(this.c2)         
          console.log("pintada la celda: "+ p + " como '" + activado +"'")            
        } else if (p === 6) {
          activado = true      
          let numbersF2 = [[false,5], [activado,6], [false,7], [false,8]]      
          //inicializar
          this.c1=[]
          this.c2=[]
          this.c3=[]
          this.c4=[]
          //
          this.c1.push(numbersF1) 
          this.c2.push(numbersF2)         
          this.c3.push(numbersF3) 
          this.c4.push(numbersF4)            
          console.log(this.c2)         
          console.log("pintada la celda: "+ p + " como '" + activado +"'")            
        } else if (p === 7) {
          activado = true      
          let numbersF2 = [[false,5], [false,6], [activado,7], [false,8]]      
          //inicializar
          this.c1=[]
          this.c2=[]
          this.c3=[]
          this.c4=[]
          //
          this.c1.push(numbersF1) 
          this.c2.push(numbersF2)         
          this.c3.push(numbersF3) 
          this.c4.push(numbersF4)            
          console.log(this.c2)         
          console.log("pintada la celda: "+ p + " como '" + activado +"'")            
        } else if (p === 8) {
          activado = true      
          let numbersF2 = [[false,5], [false,6], [false,7], [activado,8]]      
          //inicializar
          this.c1=[]
          this.c2=[]
          this.c3=[]
          this.c4=[]
          //
          this.c1.push(numbersF1) 
          this.c2.push(numbersF2)         
          this.c3.push(numbersF3) 
          this.c4.push(numbersF4)            
          console.log(this.c2)         
          console.log("pintada la celda: "+ p + " como '" + activado +"'")            
        } else if (p === 9) {
          activado = true      
          let numbersF3 = [[activado,9], [false,10], [false,11], [false,12]]      
          //inicializar
          this.c1=[]
          this.c2=[]
          this.c3=[]
          this.c4=[]
          //
          this.c1.push(numbersF1) 
          this.c2.push(numbersF2)         
          this.c3.push(numbersF3) 
          this.c4.push(numbersF4)            
          console.log(this.c3)         
          console.log("pintada la celda: "+ p + " como '" + activado +"'")            
        } else if (p === 10) {
          activado = true      
          let numbersF3 = [[false,9], [activado,10], [false,11], [false,12]]      
          //inicializar
          this.c1=[]
          this.c2=[]
          this.c3=[]
          this.c4=[]
          //
          this.c1.push(numbersF1) 
          this.c2.push(numbersF2)         
          this.c3.push(numbersF3) 
          this.c4.push(numbersF4)            
          console.log(this.c3)         
          console.log("pintada la celda: "+ p + " como '" + activado +"'")            
        } else if (p === 11) {
          activado = true      
          let numbersF3 = [[false,9], [false,10], [activado,11], [false,12]]      
          //inicializar
          this.c1=[]
          this.c2=[]
          this.c3=[]
          this.c4=[]
          //
          this.c1.push(numbersF1) 
          this.c2.push(numbersF2)         
          this.c3.push(numbersF3) 
          this.c4.push(numbersF4)            
          console.log(this.c3)         
          console.log("pintada la celda: "+ p + " como '" + activado +"'")            
        } else if (p === 12) {
          activado = true      
          let numbersF3 = [[false,9], [false,10], [false,11], [activado,12]]             
          //inicializar
          this.c1=[]
          this.c2=[]
          this.c3=[]
          this.c4=[]
          //
          this.c1.push(numbersF1) 
          this.c2.push(numbersF2)         
          this.c3.push(numbersF3) 
          this.c4.push(numbersF4)            
          console.log(this.c3)         
          console.log("pintada la celda: "+ p + " como '" + activado +"'")            
        } else if (p === 13) {
          activado = true      
          let numbersF4 = [[activado,13], [false,14], [false,15], [false,16]]             
          //inicializar
          this.c1=[]
          this.c2=[]
          this.c3=[]
          this.c4=[]
          //
          this.c1.push(numbersF1) 
          this.c2.push(numbersF2)         
          this.c3.push(numbersF3) 
          this.c4.push(numbersF4)            
          console.log(this.c4)         
          console.log("pintada la celda: "+ p + " como '" + activado +"'")            
        } else if (p === 14) {
          activado = true      
          let numbersF4 = [[false,13], [activado,14], [false,15], [false,16]]             
          //inicializar
          this.c1=[]
          this.c2=[]
          this.c3=[]
          this.c4=[]
          //
          this.c1.push(numbersF1) 
          this.c2.push(numbersF2)         
          this.c3.push(numbersF3) 
          this.c4.push(numbersF4)            
          console.log(this.c4)         
          console.log("pintada la celda: "+ p + " como '" + activado +"'")            
        } else if (p === 15) {
          activado = true      
          let numbersF4 = [[false,13], [false,14], [activado,15], [false,16]]             
          //inicializar
          this.c1=[]
          this.c2=[]
          this.c3=[]
          this.c4=[]
          //
          this.c1.push(numbersF1) 
          this.c2.push(numbersF2)         
          this.c3.push(numbersF3) 
          this.c4.push(numbersF4)            
          console.log(this.c4)         
          console.log("pintada la celda: "+ p + " como '" + activado +"'")            
        } else if (p === 16) {
          activado = true      
          let numbersF4 = [[false,13], [false,14], [false,15], [activado,16]]             
          //inicializar
          this.c1=[]
          this.c2=[]
          this.c3=[]
          this.c4=[]
          //
          this.c1.push(numbersF1) 
          this.c2.push(numbersF2)         
          this.c3.push(numbersF3) 
          this.c4.push(numbersF4)            
          console.log(this.c4)         
          console.log("pintada la celda: "+ p + " como '" + activado +"'")            
        }  
      })
    
  }  
    
  ngOnInit(): void {                     

    //posicion del resto de actores. Se establece de forma aleatoria
    this.navService.getPosicionJson1$().subscribe(data => {
      this.posJson$=data        
      //console.log("posicion jugadores (componente): " + this.posJson$)                                    
    })

    //posicion actual del cazador
    this.navService.getPosicion1$().subscribe(data => {
      this.pos$=data        
      console.log("valor observable posicion cazador (componente): " + this.pos$)                                    
      
      //¿A qué casillas puede ir el cazador en la posición que está?
      let accion = new Acciones()
      let array_accion = accion.getAcciones()
      
      //buscar casillas a las que puede moverse
      let resultado = array_accion.find(x => x.id == this.pos$)
      console.log(resultado)
      
      //posicion del resto de jugadores
      console.log(this.posJson$)                                    
      let array_posicion_resto_actores = this.posJson$     

      //recorrer el array de acciones posible en función de la posicion del cazador
      for (let i of resultado.acciones) {      
        console.log("desde casilla: " + this.pos$ + " -> se puede ir a casilla: " + i)  //ok                            
        for (let j of array_posicion_resto_actores) {                        
            //console.log(j[0])
            //console.log(Object.values(j[0]).find(el1 => "id"))                                                                       
            let id = Object.values(j[0]).find(el => "id")
            //let array =  Object.values(j[0])
            //let p = array.forEach(element => console.log(element));                                                        
            
            if (String(i) == id) {                                                                              
              console.log("coincidencia")                                                       
              //quien esta cerca?                                   
              console.log("actor: " + j[0]["actor"] + " está en la casilla => " + String(i))
              alert("cuidado!, el " + j[0]["actor"] + " está cerca")

              //mensajes posibles personalizados, según posicion del cazador y el resto de actores. Servicio  
              //let array_mensaje = this.mensajesService.getMensajes() 
              //let resultado_mensaje = array_mensaje.find(x => x.id == this.pos$)                                
            } 
                       
        }
        
      }
    })
    
  }

  ngOnDestroy(): void {             
  }
 
}

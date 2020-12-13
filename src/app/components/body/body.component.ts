import { calcPossibleSecurityContexts } from '@angular/compiler/src/template_parser/binding_parser';
import { Component, OnInit } from '@angular/core';
//import { Grilla } from '../../clases/Grilla';
//import { Jugadores } from '../../clases/Jugadores';

import { MensajesService } from "../../services/mensajes.service";
import { NavService } from "../../services/nav.service";

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.scss']
})

export class BodyComponent implements OnInit {  
  //total_casillas = 16;      
  //pintar la tabla
    grilla_1 = [[1],[2],[3],[4],[5],[6],[7],[8],[9],[10],[11],[12],[13],[14],[15],[16]]
    fila1 = []
    fila2 = []
    fila3 = []
    fila4 = []    

  constructor(public mensajesService: MensajesService, public navService: NavService) {   
    
    //for (let i = 0; i < this.grilla_1[i].length; i++) {    
    for (let i = 0; i < 2; i++) {          
        const element = this.grilla_1[i];
         let array_ajustado = []
          array_ajustado.push(this.grilla_1[i])
          array_ajustado.push(this.grilla_1[i+1])
          array_ajustado.push(this.grilla_1[i+2])
          array_ajustado.push(this.grilla_1[i+3])          
          this.fila1.push(array_ajustado)          
          console.log(this.fila1)          
      i++
    }  

    for (let i = 4; i < 5; i++) {    
      const element = this.grilla_1[i];
       let array_ajustado = []
        array_ajustado.push(this.grilla_1[i])
        array_ajustado.push(this.grilla_1[i+1])
        array_ajustado.push(this.grilla_1[i+2])
        array_ajustado.push(this.grilla_1[i+3])          
        this.fila2.push(array_ajustado)
        console.log(this.fila2)
    i++
    }    

    for (let i = 8; i < 9; i++) {    
      const element = this.grilla_1[i];
       let array_ajustado = []
        array_ajustado.push(this.grilla_1[i])
        array_ajustado.push(this.grilla_1[i+1])
        array_ajustado.push(this.grilla_1[i+2])
        array_ajustado.push(this.grilla_1[i+3])          
        this.fila3.push(array_ajustado)
        console.log(this.fila3)
    i++
    }    

    for (let i = 12; i < 13; i++) {    
      const element = this.grilla_1[i];
       let array_ajustado = []
        array_ajustado.push(this.grilla_1[i])
        array_ajustado.push(this.grilla_1[i+1])
        array_ajustado.push(this.grilla_1[i+2])
        array_ajustado.push(this.grilla_1[i+3])          
        this.fila4.push(array_ajustado)
        console.log(this.fila4)
    i++
    }    
    
    //posicion del cazador
    this.navService.getPosicion(1)
    //obtener json aleatorio
    this.navService.getJSONaleatorio()    

  }

  //mensajes
  
  //lozalizar posiciones
  

  ngOnInit(): void {    
  }

}

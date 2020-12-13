import { Component, OnInit } from '@angular/core';

//importamos servicio
import { NavService } from "../../services/nav.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  //inicializamos servicios, publicos
  constructor(public navService: NavService) {    
   }
   
  ngOnInit(): void {    
  }

}

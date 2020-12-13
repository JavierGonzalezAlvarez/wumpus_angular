import { Component, OnInit } from '@angular/core';

//importamos servicio
import { NavService } from "../../services/nav.service";

@Component({
  selector: 'app-help',
  templateUrl: './help.component.html',
  styleUrls: ['./help.component.scss']
})
export class HelpComponent implements OnInit {

  constructor(public navService: NavService) { }

  ngOnInit(): void {
  }

}

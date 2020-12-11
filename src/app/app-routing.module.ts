import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BodyComponent} from "./components/body/body.component";
import { HelpComponent } from "./components/help/help.component";

const routes: Routes = [
  {
    // rutas en angular
    path: '', component: BodyComponent
  },
  {
    // rutas en angular
    path: 'help', component: HelpComponent
  },  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

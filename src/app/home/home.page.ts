import { Component } from '@angular/core';

interface componete{
  icon:string;
  name:string;
  redirecTo:string;
}

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  componetes: componete[]=[
    {
      icon:"alert-circle-outline",
      name:"Alerta",
      redirecTo:"/alerta"
    },
    {
      icon:"people-outline",
      name:"Avatar",
      redirecTo:"/avatar"
    },
    {
      icon:"shapes-outline",
      name:"Botones Flotantes",
      redirecTo:"/botonfloat"
    },
    {
      icon:"stop-outline",
      name:"Botones",
      redirecTo:"/botons"
    },
    {
      icon:"checkbox-outline",
      name:"Check Box",
      redirecTo:"/checkbox"
    },
    {
      icon:"card-outline",
      name:"Tarjetas",
      redirecTo:"/tarjetas"
    },
    {
      icon:"today-outline",
      name:"Data Time",
      redirecTo:"/datatime"
    },
    {
      icon:"reorder-four-outline",
      name:"Item",
      redirecTo:"/item"
    },
    {
      icon:"sparkles-outline",
      name:"Modal",
      redirecTo:"/modal"
    }
    
  ]

  constructor() {}

}

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
    }
  ]

  constructor() {}

}

import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Olá!';

  clientes = [
    {
      nome: 'Alexandre',
      sexo: 'Masculino',
      idade: 20
    },
    {
      nome: 'Roberto',
      sexo: 'Masculino',
      idade: 22
    },
    {
      nome: 'Maura',
      sexo: 'Feminino',
      idade: 23
    },
    {
      nome: 'Claudia',
      sexo: 'Feminino',
      idade: 21
    },
  ]

  constructor() { }

  //Diretivas estruturais
  //*ngFor 

}

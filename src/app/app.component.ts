import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'Olá!';

  clientes = [
    {
      nome: 'Alexandre',
      sexo: 'Masculino',
      idade: 20,
      salario: 10000,
    },
    {
      nome: 'Roberto',
      sexo: 'Masculino',
      idade: 22,
      salario: 11000,
    },
    {
      nome: 'Maura',
      sexo: 'Feminino',
      idade: 23,
      salario: 12000,
    },
    {
      nome: 'Claudia',
      sexo: 'Feminino',
      idade: 21,
      salario: 13000,
    },
  ];

  constructor() {}

  // Pipes
}

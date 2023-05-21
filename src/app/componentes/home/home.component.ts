import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  title = null;

  clientes = [
    {
      nome: 'Alexandre',
      sexo: 'M',
      idade: 20,
      salario: 10000,
    },
    {
      nome: 'Roberto',
      sexo: 'M',
      idade: 22,
      salario: 11000,
    },
    {
      nome: 'Maura',
      sexo: 'F',
      idade: 23,
      salario: 12000,
    },
    {
      nome: 'Claudia',
      sexo: 'f',
      idade: 21,
      salario: 13000,
    },
  ];
}

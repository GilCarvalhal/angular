import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sexo',
})
export class SexoPipe implements PipeTransform {
  transform(value: unknown, ...args: unknown[]): unknown {
    let sexo = 'Masculino';

    if (value === 'F' || 'f') {
      sexo = 'Feminino';
    }
    return sexo;
  }
}

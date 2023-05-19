import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Angular';

  imgURL = "/assets/property-binding.png/";
  constructor() { }

  chamarFuncao() {
    console.log('Esse é um clique!');
  }

  //4 tipos de data binding
  // Interpolação {{title}}

  //Property Binding <img [src]="imgURL">

  //Event Binding <button (click)='chamarFuncao()'>

  //Two-Way Data Binding 

}

import { Component, OnInit, OnChanges, SimpleChanges, DoCheck } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnChanges, DoCheck {
  title = 'componentes-angular';

  constructor() {
    console.log('Componente construtor');
  }

  //Ao carregar a página ele pode executar alguma ação.
  ngOnInit(): void {
    console.log('Component OnInit');
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('Component OnChanges');
    this.title = 'Novo Título';
  }

  ngDoCheck(): void {
    console.log('Component DoCheck');
  }

  mudarTexto() {
    this.title += 'a';
  }

  // ngOnDestroy(): void {
  //   console.log('Component OnDestroy');    
  // }

  // ngAfterContentInit(): void {
  // console.log('Component AfterContentInit');      
  // }

  // ngAfterViewInit(): void {
  //   console.log('Component AfterViewInit');    
  // }

  // ngAfterContentChecked(): void {
  //   console.log('Component ContentChecked');
  // }

  // ngAfterViewChecked(): void {
  //   console.log('Component VierChecked');
  // }

}

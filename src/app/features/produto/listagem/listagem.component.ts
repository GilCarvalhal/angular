import { Component, OnInit } from '@angular/core';
import { ProdutoService } from '../services/produto.service';

@Component({
  selector: 'app-listagem',
  templateUrl: './listagem.component.html',
  styleUrls: ['./listagem.component.scss'],
})
export class ListagemComponent implements OnInit {
  constructor(private produtoService: ProdutoService) {}

  // Biblioteca RXJS
  // JavaScript axios axios.get() - Requisição assíncrona, ou seja, ela não é imediata.
  // async return await === Promisse
  // Angular usa RXJS e o RXJS não usa Promisse
  // Angular usa Observable
  ngOnInit(): void {
    this.produtoService.getCidadePeloCep().subscribe((resposta) => {
      console.log(resposta);
    });
  }

  // getDoJavascript() {
  //   this.produtoService.getCidadePeloCep().then((resposta) => {
  //     this.cep = resposta;
  //   });
  // }
}

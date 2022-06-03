import { Injectable } from '@angular/core';

@Injectable()
export class PessoaServiceService {

  nomePessoas: string [] = ['João','Maria','Angular 2', 'Thiago'];

  constructor() { }

  getPessoas(): string [] {
    return this.nomePessoas;
  }

  setPessoas(nome: string): void {
    this.nomePessoas.push(nome);
  }

}

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { debounceTime } from 'rxjs/operators';
// import '../../../node_modules/rxjs/add/operator/debounceTime';

@Component({
  selector: 'app-cadastro-clientes',
  templateUrl: './cadastro-clientes.component.html',
  styleUrls: ['./cadastro-clientes.component.css']
})
export class CadastroClientesComponent implements OnInit {

  formCadastro: FormGroup;
  conversao: string;
  valoresForm: any;

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {

    this.formCadastro = this.fb.group({
      nome: [''],
      cpf: [],
      email: [],
      telefone: [],
      endereco: []
    });
    console.log(this.valoresForm);
    this.formCadastro.valueChanges
      .pipe(debounceTime(1000))
      .subscribe(res => {
        console.log(res);
        this.valoresForm = res;
      });
  }
  cadastro(){
    this.conversao = JSON.stringify(this.valoresForm);
    localStorage.setItem('cadastro', this.conversao);
   }

}

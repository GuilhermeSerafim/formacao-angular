import { Component } from '@angular/core';
interface IPlano {
  tipo: 'Simples' | 'Premium' | 'Avançado'; // restringe valores possíveis
  preco: number;
}
interface IPessoa {
  nome?: string,
  idade: number,
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'prj-angular';
  name: string = "Nome Inicial";

  planoSimples: IPlano = {
    preco: 100,
    tipo: "Simples"
  }
  planoPremium: IPlano = {
    preco: 300,
    tipo: "Premium"
  }
  planoAvancado: IPlano = {
    preco: 400,
    tipo: "Avançado"
  }
  // Simulando expressão para valor dinamico
  minhaProp: boolean = Date.now() > 0;
  onCardButtonClicked() {
    console.log("Simulando chamada HTTP")
  }

  handleInputChange(e: any) {
    // Posso usar o valor para fazer n coisas, mas atribuição não é pra fazer se vc já fizer o two way data binding
    console.log(e)
    // this.name = e; -> Não precisa, o [(ngModel)]="name" já faz isso (two way daya binding)
  }
  toogleButton() {
    this.minhaProp = !this.minhaProp;
  }

  pessoa: IPessoa = {
    idade: 12,
    nome: ""
  }

//   O tipo **any** em TypeScript significa: "qualquer tipo".
// Ele desativa a verificação de tipos do TypeScript, permitindo que a variável aceite qualquer valor: string, number, object, array, etc.
  carro: any = {
  cor: "vermelho"
  }

// Todos esses valores são true
isTrue() {
  // return {}
  // return []
  // return true
  // return "teste"
  // return 1
  return this.pessoa.idade

}
// Todos esses valores são false
isFalse() {
  // return false
  // return 0
  // return ''
  // return ""
  // return null
  // return undefined
  // return -0
  // return NaN
  // return this.pessoa.nome
  return this.carro.volante?.modelo
}
}

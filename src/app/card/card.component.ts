import { Component, ViewEncapsulation } from '@angular/core';

interface IPlano {
  infos: IInfos;
}

interface IInfos {
  tipo: string;
  preco: number;
}

@Component ({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss',
  // Estilos aplicados à apenas esse componente
  // Mas pode sofrer estilizações globais
  encapsulation: ViewEncapsulation.Emulated, // Mais usada!!
})

export class CardComponent {
  // Com any, você está dizendo: "A variável plano pode ser qualquer coisa (objeto, string, número, função...)".
  plano: IPlano = {
    infos: {
      tipo:  'Simples',
      preco: 100,
    }
  }
}

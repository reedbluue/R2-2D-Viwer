import { Vetor } from "./Vetor.js";

export class ListaVetores {
  constructor() {
    this._lista = [];
  }

  get lista() { return this._lista };

  adiciona(vetor) {
    if (!vetor instanceof Vetor)
      throw new Error('Tentativa de acidionar um item inválido em ListaVetores!');
    return this._lista.push(vetor);
  }
}
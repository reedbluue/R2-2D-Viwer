import { Vetor } from "./Vetor.js";

export class ListaVetores {
  constructor() {
    this._lista = [];
  }

  get lista() { return this._lista };

  adiciona(vetor) {
    if (!vetor instanceof Vetor)
      throw new Error('Tentativa de acidionar um item inválido em ListaVetores!');
    this._isValid(vetor);
    return this._lista.push(vetor);
  }

  maiorIJ() {
    let mI = 0, mJ = 0;
    this._lista.forEach(vetor => {
      if(mI < Math.abs(vetor.i))
        mI = Math.abs(vetor.i);
      if(mJ < Math.abs(vetor.j))
        mJ = Math.abs(vetor.j);    
    });
    return [mI, mJ];
  }

  _isValid(vetor) {
    this._lista.forEach(obj => {
      if(vetor.id == obj.id)
        throw new Error(`Já existe um vetor com o ID '${vetor.id}'`);
    });
  }
}
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

  remove(id) {
    let index = this._lista.findIndex(vetor => vetor.id == id);
    if (index == -1)
      throw new Error('Id não encontrado! Não foi possível remover o vetor.');
    this._lista.splice(index, 1);
  }

  inverteById(id) {
    this.findById(id).inverte();
  }

  findById(id) {
    let vetor = this._lista.find(vetor => vetor.id == id);
    if (!vetor)
      throw new Error('Id não encontrado! Não foi possível retornar o vetor.');
    return vetor;
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
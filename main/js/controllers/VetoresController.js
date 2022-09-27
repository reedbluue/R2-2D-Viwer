import { Bind } from "../helpers/Bind.js";
import { ListaVetores } from "../models/ListaVetores.js";
import { Vetor } from "../models/Vetor.js";
import { VertoresView } from "../views/VetoresView.js";

const $ = document.querySelector.bind(document);

export class VetoresController {

  constructor() {
    this._formID = $('#form-id');
    this._formColor = $('#form-color');
    this._formI = $('#form-i');
    this._formJ = $('#form-j');

    this._listaVetores = new Bind(
      new ListaVetores(),
      new VertoresView($('#vetor-view')),
      'adiciona'
    );
  }

  adicionaVetor() {
    let vetor = new Vetor(
      this._formID.value,
      this._formColor.value,
      this._formI.value,
      this._formJ.value
    );
    this._listaVetores.adiciona(vetor);
  }
}
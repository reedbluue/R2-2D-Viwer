import { Bind } from "../helpers/Bind.js";
import { ListaVetores } from "../models/ListaVetores.js";
import { Plano } from "../models/Plano.js";
import { Vetor } from "../models/Vetor.js";
import { ListaVetoresView } from "../views/ListaVetoresView.js";
import { PlanoView } from "../views/PlanoView.js";

const $ = document.querySelector.bind(document);

export class PlanoController {

  constructor() {
    this._formID = $('#form-id');
    this._formColor = $('#form-color');
    this._formI = $('#form-i');
    this._formJ = $('#form-j');

    this._listaVetores = new Bind(
      new ListaVetores(),
      new ListaVetoresView($('#lista-view')),
      'adiciona'
    );

    this._planoView = new PlanoView(new Plano('#plano1'), this._listaVetores);

    addEventListener('resize', () => {
      this._planoView.update(this._listaVetores);
    })
  }

  adicionaVetor() {
    let vetor = new Vetor(
      this._formID.value,
      this._formColor.value,
      this._formI.value,
      this._formJ.value
    );
    this._listaVetores.adiciona(vetor);
    this._planoView.update(this._listaVetores);
  }
}
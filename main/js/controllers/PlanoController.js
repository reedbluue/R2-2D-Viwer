import { Bind } from "../helpers/Bind.js";
import { ListaVetores } from "../models/ListaVetores.js";
import { Mensagem } from "../models/Mensagem.js";
import { Plano } from "../models/Plano.js";
import { Vetor } from "../models/Vetor.js";
import { ListaVetoresView } from "../views/ListaVetoresView.js";
import { MensagemView } from "../views/MensagemView.js";
import { PlanoView } from "../views/PlanoView.js";

const $ = document.querySelector.bind(document);

export class PlanoController {

  constructor() {
    this._formID = $('#form-id');
    this._formID.focus();
    this._formColor = $('#form-color');
    this._formI = $('#form-i');
    this._formJ = $('#form-j');

    this._mensagem = new Bind(
      new Mensagem(),
      new MensagemView($('#mensagem-view')),
      'content', 'modify'
    );

    this._listaVetores = new Bind(
      new ListaVetores(),
      new ListaVetoresView($('#lista-view')),
      'adiciona', 'remove'
    );

    this._planoView = new PlanoView(new Plano('#plano1'), this._listaVetores);

    addEventListener('resize', () => {
      this._planoView.update(this._listaVetores);
    })
  }

  adicionaVetor() {
    try {
      let vetor = new Vetor(
        this._formID.value,
        this._formColor.value,
        this._formI.value,
        this._formJ.value
      );
      this._listaVetores.adiciona(vetor);
      this._mensagem.modify('Vetor adicionado com sucesso!', 0);
    } catch(err) {
      this._mensagem.modify(err.message, 1);
    } finally {
      this._planoView.update(this._listaVetores);
    }   
  }

  removeVetor(id) {
    try {
      this._listaVetores.remove(id);
      this._mensagem.modify(`Vetor '${id}' removido com sucesso!`, 0);
    } catch (err) {
      this._mensagem.modify(err.message, 1);
    } finally {
      this._planoView.update(this._listaVetores);
    }
  }

  destacaVetor(id) {
    this._planoView.update(this._listaVetores);
    this._planoView.marcaVetor(this._listaVetores.findById(id));
  }
}
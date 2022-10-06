import { Bind } from "../helpers/Bind.js";
import { ListaVetores } from "../models/ListaVetores.js";
import { Mensagem } from "../models/Mensagem.js";
import { Plano } from "../models/Plano.js";
import { Vetor } from "../models/Vetor.js";
import { ListaVetoresView } from "../views/ListaVetoresView.js";
import { MensagemView } from "../views/MensagemView.js";
import { PlanoVersorView } from "../views/PlanoVersorView.js";
import { PlanoView } from "../views/PlanoView.js";

const $ = document.querySelector.bind(document);

export class PlanoController {

  constructor() {
    this._formID = $('#form-id');
    this._formID.focus();
    this._formColor = $('#form-color');
    this._formI = $('#form-x');
    this._formJ = $('#form-y');

    this._mensagem = new Bind(
      new Mensagem(),
      new MensagemView($('#mensagem-view')),
      'content', 'modify'
    );

    this._listaVetores = new Bind(
      new ListaVetores(),
      new ListaVetoresView($('#lista-view')),
      'adiciona', 'remove', 'inverteById'
    );

    this._planoView = new PlanoView(new Plano('#plano1'), this._listaVetores);

    this._planoVersorView = new PlanoVersorView($('#versor-view'), new Plano('#plano2', true));

    this._mensagem.modify('Olá, humano ^^ Adicione seu primeiro vetor!', 0);

    this._planoView.update(this._listaVetores);

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
    this._planoView.update(this._listaVetores, 0);
    this._planoView.marcaVetor(this._listaVetores.findById(id));
    this._mensagem.modify(`Vetor "${id}" destacado no plano!`, 0);
  }

  mostraVersor(id) {
    this._planoVersorView.update(this._listaVetores.findById(id).versor());
  }

  inverteVetor(id) {
    this._listaVetores.inverteById(id);
    this._planoView.update(this._listaVetores);

    this._mensagem.modify(`Coordenadas do vetor "${id}" invertidas!`, 0);
  }
}
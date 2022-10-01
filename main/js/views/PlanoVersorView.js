import { PlanoModify } from "../helpers/PlanoModify.js";
import { PlanoPrint } from "../helpers/PlanoPrint.js";
import { ListaVetores } from "../models/ListaVetores.js";
import { Plano } from "../models/Plano.js";

export class PlanoVersorView {
  constructor(elemento, plano) {
    if(!plano instanceof Plano)
      throw new Error('Tipo incorreto na construção de PlanoVersorView!')

    this._plano = plano;

    this._elemento = elemento;
  }

  template(vetor) {
    return `
      <div class="float-content float-plan" versor-area>
        <div class="plan" id="${this._plano.idRef.slice(1)}" versor-area>
          <canvas width="250px" height="250px" versor-area></canvas>
          <button class="exit-plan" aria-label="botão para fechar a janela"></button>
        </div>
        <h2 class="versor-info" id="${this._plano.idRef.slice(1)}-info" versor-area>${`Versor de "${vetor.id.slice(2)}"<br/>( ${vetor.i} , ${vetor.j} )`}</h2>
      </div>
    `;
  }

  update(vetor) {
    this._elemento.innerHTML = this.template(vetor);

    this._plano.update();

    this._plano.exitButton.addEventListener('click', e => this._remove(e));

    this._planoModify = new PlanoModify(this._plano);
    this._planoPrint = new PlanoPrint(this._plano);

    let lista = new ListaVetores();
    lista.adiciona(vetor);

    this._planoModify.ajustaAoDisplay(lista, this._planoPrint.escalaDistancia);
    this._planoPrint.updatePlano(lista);
  }


  _remove(e) {
    this._elemento.innerHTML = '';
    this._plano.exitButton.removeEventListener('click', this._remove);
  }
}
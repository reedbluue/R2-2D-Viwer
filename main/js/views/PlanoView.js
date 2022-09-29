import { PlanoMecanica } from "../helpers/PlanoMecanica.js";
import { PlanoModify } from "../helpers/PlanoModify.js";
import { PlanoPrint } from "../helpers/PlanoPrint.js";
import { Plano } from "../models/Plano.js";

export class PlanoView {
  constructor(plano, lista) {
    if(!plano instanceof Plano)
      throw new Error('Tipo incorreto na construção de PlanoView!')
    this._plano = plano;

    this._planoModify = new PlanoModify(this._plano);
    this._planoMecanica = new PlanoMecanica(this._plano);
    this._planoPrint = new PlanoPrint(this._plano);

    this._planoModify.ajustaAoDisplay(lista, this._planoPrint.escala);
    this._planoPrint.updatePlano(lista);
  }

  template() {
    return;
  }

  update(model) {
    this._planoModify.ajustaAoDisplay(model, this._planoPrint.escala);
    this._planoPrint.updatePlano(model);
  }
}
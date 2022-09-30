import { PlanoMecanica } from "../helpers/PlanoMecanica.js";
import { PlanoModify } from "../helpers/PlanoModify.js";
import { PlanoPrint } from "../helpers/PlanoPrint.js";
import { Plano } from "../models/Plano.js";
import { ProxyFactory } from "../services/ProxyFactory.js";

export class PlanoView {
  constructor(plano, lista) {
    if(!plano instanceof Plano)
      throw new Error('Tipo incorreto na construção de PlanoView!')

    this._plano = ProxyFactory.create(
      plano,
      ['escala'],
      () => {
        this._planoPrint.updatePlano(lista);
      }
    );

    this._planoMecanica = new PlanoMecanica(this._plano);
    this._planoModify = new PlanoModify(this._plano);
    this._planoPrint = new PlanoPrint(this._plano);

    this._planoModify.ajustaAoDisplay(lista, this._planoPrint.escalaDistancia);
    this._planoPrint.updatePlano(lista);
  }

  marcaVetor(vetor) {
    this._planoPrint.desenhaCirculoNoVetor(vetor);
  }

  update(model) {
    this._planoModify.ajustaAoDisplay(model, this._planoPrint.escalaDistancia);
    this._planoMecanica.centralizaPlano();
    this._planoPrint.updatePlano(model);
  }
}
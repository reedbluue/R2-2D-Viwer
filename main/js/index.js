import { VetoresController } from "./controllers/VetoresController.js";
import ajustePlano from "./functions/ajustePlano.js";
import arrastePlano from "./functions/arrastePlano.js";
import { PlanoPrint } from "./helpers/PlanoPrint.js";

const $ = document.querySelector.bind(document);

let vetoresController = new VetoresController();

ajustePlano();
arrastePlano();
PlanoPrint.geraPlano();

const form = $('#form-vetor');

form.addEventListener('submit', e => {
  e.preventDefault();
  vetoresController.adicionaVetor();
});
import { PlanoController } from "./controllers/PlanoController.js";

const $ = document.querySelector.bind(document);
const form = $('#form-vetor');

let planoController = new PlanoController();

form.addEventListener('submit', e => {
  e.preventDefault();
  planoController.adicionaVetor();
});
import { PlanoController } from "./controllers/PlanoController.js";

const $ = document.querySelector.bind(document);
const form = $('#form-vetor');
const listaView = $('#lista-view');

let planoController = new PlanoController();

form.addEventListener('submit', e => {
  e.preventDefault();
  planoController.adicionaVetor();
});

listaView.addEventListener('click', e => {
  if(e.path[0].hasAttribute('js--deletar-vetor'))
    planoController.removeVetor(e.path[1].cells[0].textContent);
});

listaView.addEventListener('click', e => {
  if(e.path[0].hasAttribute('js--destacar-vetor'))
    planoController.destacaVetor(e.path[1].cells[0].textContent);
});
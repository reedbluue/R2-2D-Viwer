import { PlanoPrint } from "../helpers/PlanoPrint.js";

// Declarando constantes globais
const planContainer = document.querySelector('.plan-container');
const r2Plan = document.querySelector('.r2-plan');

const ajustePlano = () => {

  // Ajustando o plano r2

  let pageWidth = window.innerWidth; // Valor da largura da janela em pixels
  r2Plan.setAttribute('width', `${window.innerWidth}px`); // modificando a largura do plano R2
  planContainer.style.width = `${window.innerWidth}px`; // inicia o container do plano com a largura da janela

  let pageHeight = window.innerHeight; // Valor da altura da janela em pixels
  r2Plan.setAttribute('height', `${window.innerHeight * 0.85}px`); // modificando a altura do plano R2
  planContainer.style.height = `${window.innerHeight * 0.85}px`; // inicia o container do plano com a altura da tela * 0.85

  addEventListener('resize', () => { // Sempre que a janala redimensionar
    pageWidth = window.innerWidth; // Valor da largura da janela em pixels
    pageHeight = window.innerHeight; // Valor da altura da janela em pixels

    planContainer.style.width = `${window.innerWidth}px`; // atualiza valores do tamanho do container do plano
    planContainer.style.height = `${window.innerHeight * 0.85}px`; // atualiza valores do tamanho do container do plano

    if (planContainer.offsetWidth > r2Plan.offsetWidth) { // se a largura do container for maior
      r2Plan.setAttribute('width', `${planContainer.offsetWidth}px`); // modificando a largura do plano R2
    }
    if (planContainer.offsetHeight > r2Plan.offsetHeight) {  // se a altura do container for maior
      r2Plan.setAttribute('height', `${planContainer.offsetHeight}px`); // modificando a altura do plano R2
    }

    // correção da posição do plano (bug onde o plano sai do limite de tela)

    let r2Left = r2Plan.offsetLeft;
    let r2Right = r2Plan.offsetLeft + r2Plan.offsetWidth;

    if (r2Left > 0) {
      r2Plan.style.left = `0px`;
    }

    if (r2Right < planContainer.offsetWidth) {
      r2Plan.style.left = `${planContainer.offsetWidth - r2Plan.offsetWidth}px`;
    }

    let r2Top = r2Plan.offsetTop;
    let r2Bottom = r2Plan.offsetTop + r2Plan.offsetHeight;

    if (r2Top > 0) {
      r2Plan.style.top = `0px`;
    }

    if (r2Bottom < planContainer.offsetHeight) {
      r2Plan.style.top = `${planContainer.offsetHeight - r2Plan.offsetHeight}px`;
    }

    /////////////////////////////////////////////////////////////////////////////////

    PlanoPrint.geraPlano();
  });

};

export default ajustePlano;
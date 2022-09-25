import geraPlano from "./geraPlano.js";

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

    geraPlano();
  });

};

export default ajustePlano;
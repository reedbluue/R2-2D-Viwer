// Declarando constantes globais
const planContainer = document.querySelector('.plan-container');
const r2Plan = document.querySelector('.r2-plan');

// Ajustando o plano r2

let pageWidth = window.innerWidth; // Valor da largura da janela em pixels
r2Plan.setAttribute('width', `${innerWidth}px`); // modificando a largura do plano R2
planContainer.style.width = `${innerWidth}px`; // inicia o container do plano com a largura da janela

let pageHeight = window.innerHeight; // Valor da altura da janela em pixels
r2Plan.setAttribute('height', `${innerHeight * 0.85}px`); // modificando a altura do plano R2
planContainer.style.height = `${innerHeight * 0.85}px`; // inicia o container do plano com a altura da tela * 0.85

addEventListener('resize', () => {
  pageWidth = window.innerWidth; // Valor da largura da janela em pixels
  pageHeight = window.innerHeight; // Valor da altura da janela em pixels

  planContainer.style.width = `${innerWidth}px`; // atualiza valores do tamanho do container do plano
  planContainer.style.height = `${innerHeight * 0.85}px`; // atualiza valores do tamanho do container do plano

  let planContainerW = Number(planContainer.style.width.slice(0,-2)); // recebe a largura do plano
  let planContainerH = Number(planContainer.style.height.slice(0,-2));  // recebe a altura do plano

  if (planContainerW > r2Plan.getAttribute('width').slice(0,-2)) { // se a largura do container for maior
    r2Plan.setAttribute('width', `${planContainerW}px`); // modificando a largura do plano R2
  }
  if (planContainerH > (r2Plan.getAttribute('height').slice(0,-2))) {  // se a altura do container for maior
    r2Plan.setAttribute('height', `${planContainerH}px`); // modificando a altura do plano R2
  }
  geraPlano();
});

// Gerando o plano

const ctxPlano = r2Plan.getContext('2d');

const eixosWidth = 3; // espessura dos eixos
const eixosColor = '#000'; // cor dos eixos
geraPlano();

function geraPlano() {

  let planW = Number(r2Plan.getAttribute('width').slice(0,-2));
  let planH = Number(r2Plan.getAttribute('height').slice(0,-2));

  ctxPlano.clearRect(0, 0, r2Plan.width, r2Plan.height);
  ctxPlano.beginPath();
  ctxPlano.lineWidth = eixosWidth;
  ctxPlano.strokeStyle = eixosColor;
  ctxPlano.setLineDash([]);
  ctxPlano.moveTo(planW/2, 0);
  ctxPlano.lineTo(planW/2, planH);
  ctxPlano.moveTo(0, planH/2);
  ctxPlano.lineTo(planW, planH/2);
  ctxPlano.stroke();
  ctxPlano.closePath();
}





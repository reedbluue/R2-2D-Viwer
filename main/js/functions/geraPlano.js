// Declarando constantes globais
const r2Plan = document.querySelector('.r2-plan');


// Gerando o plano

const ctxPlano = r2Plan.getContext('2d');

const eixosWidth = 3; // espessura dos eixos
const eixosColor = '#000'; // cor dos eixos

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

export default geraPlano;
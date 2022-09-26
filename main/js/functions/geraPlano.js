// Declarando constantes globais
const r2Plan = document.querySelector('.r2-plan');


// Gerando o plano

const ctxPlano = r2Plan.getContext('2d');

const eixosWidth = 3; // espessura dos eixos
const eixosColor = '#000'; // cor dos eixos

const escala = 35; // escala em px para cada unidade
const escalaWidth = 1;
const escalaSize = 8;
const escalaColor = '#000'; // cor dos eixos

const markFont = 12; // tamanho da fonte das marcações em px
const markColor = '#000'; // cor da fonte das marcações
const markGap = 15; // espaço entre a mark e a escala

function geraPlano() {

  let planW = r2Plan.offsetWidth;
  let planH = r2Plan.offsetHeight;

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

  for (let i = planW/2; i < planW; i += escala) {

    // Printando a escala

    ctxPlano.beginPath();
    ctxPlano.lineWidth = escalaWidth;
    ctxPlano.strokeStyle = escalaColor;
    ctxPlano.setLineDash([]);
    ctxPlano.moveTo(i, planH/2);
    ctxPlano.lineTo(i, (planH/2) + escalaSize);
    ctxPlano.stroke();

    ctxPlano.font = `${markFont}px serif`;
    ctxPlano.strokeStyle = markColor;

    let markAtual = Math.floor((i - planW/2) / escala);

    if (markAtual != 0)
      ctxPlano.fillText(`${markAtual}`, i - (`${markAtual}`.length * (markFont / 4)), (planH/2) + escalaSize + markGap);

    ctxPlano.closePath();
  }

  for (let i = planW/2; i > 0; i -= escala) {

    // Printando a escala

    ctxPlano.beginPath();
    ctxPlano.lineWidth = escalaWidth;
    ctxPlano.strokeStyle = escalaColor;
    ctxPlano.setLineDash([]);
    ctxPlano.moveTo(i, planH/2);
    ctxPlano.lineTo(i, (planH/2) + escalaSize);
    ctxPlano.stroke();
    ctxPlano.closePath();

    ctxPlano.font = `${markFont}px serif`;
    ctxPlano.strokeStyle = markColor;

    let markAtual = Math.floor((i - planW/2) / escala);

    if (markAtual != 0)
      ctxPlano.fillText(`${markAtual}`, i - (`${markAtual}`.length * (markFont / 4)), (planH/2) + escalaSize + markGap);

    ctxPlano.closePath();
  }

  for (let i = planH/2; i > 0; i -= escala) {

    // Printando a escala

    ctxPlano.beginPath();
    ctxPlano.lineWidth = escalaWidth;
    ctxPlano.strokeStyle = escalaColor;
    ctxPlano.setLineDash([]);
    ctxPlano.moveTo(planW/2, i);
    ctxPlano.lineTo((planW/2) - escalaSize, i);
    ctxPlano.stroke();

    ctxPlano.font = `${markFont}px serif`;
    ctxPlano.strokeStyle = markColor;

    let markAtual = Math.floor((i - planH/2) / escala);

    if (markAtual != 0)
      ctxPlano.fillText(`${markAtual}`, (planW/2) - escalaSize - markGap - (`${markAtual}`.length * (markFont / 5)), i - (`${markAtual}`.length - (markFont / 2.8)));

    ctxPlano.closePath();
  }

  for (let i = planH/2; i < planH; i += escala) {

    // Printando a escala

    ctxPlano.beginPath();
    ctxPlano.lineWidth = escalaWidth;
    ctxPlano.strokeStyle = escalaColor;
    ctxPlano.setLineDash([]);
    ctxPlano.moveTo(planW/2, i);
    ctxPlano.lineTo((planW/2) - escalaSize, i);
    ctxPlano.stroke();

    ctxPlano.font = `${markFont}px serif`;
    ctxPlano.strokeStyle = markColor;

    let markAtual = Math.floor((i - planH/2) / escala);

    if (markAtual != 0)
      ctxPlano.fillText(`${markAtual}`, (planW/2) - escalaSize - markGap - (`${markAtual}`.length * (markFont / 5)), i - (`${markAtual}`.length - (markFont / 2.8)));

    ctxPlano.closePath();
  }
}

export default geraPlano;
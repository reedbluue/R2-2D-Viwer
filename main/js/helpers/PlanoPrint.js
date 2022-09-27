import { Vetor } from "../models/Vetor.js";

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

const vetorWidth = 2;

export class PlanoPrint {

  constructor() {
    throw new Error('A classe PrintVetor não deve ser instanciada!');
  }

  static print(vetor) {
    if (!vetor instanceof Vetor)
      throw new Error('Tentativa de acidionar um item inválido em ListaVetores!');
    
    let planW = r2Plan.offsetWidth;
    let planH = r2Plan.offsetHeight;

    drawArrow(
      ctxPlano,
      planW/2, planH/2,
      planW/2 + (escala * vetor.i), planH/2 - (escala * vetor.j),
      vetorWidth, vetor.color
    );
    
    ctxPlano.strokeStyle = vetor.color;
    ctxPlano.setLineDash([15, 15]);
    ctxPlano.lineDashOffset = -15;
    ctxPlano.lineWidth = Math.ceil(vetorWidth / 2);
    ctxPlano.moveTo(planW/2 + (escala * vetor.i), planH/2 - (escala * vetor.j));
    ctxPlano.lineTo(planW/2 + (escala * vetor.i), planH/2);
    ctxPlano.moveTo(planW/2 + (escala * vetor.i), planH/2 - (escala * vetor.j));
    ctxPlano.lineTo(planW/2, planH/2 - (escala * vetor.j));
    ctxPlano.stroke();

    ctxPlano.closePath();
  }

  static geraPlano(lista = []) {

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
  
      let markAtual = Math.floor((i - planH/2) / escala) * -1;
  
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
  
      let markAtual = Math.floor((i - planH/2) / escala) * -1;
  
      if (markAtual != 0)
        ctxPlano.fillText(`${markAtual}`, (planW/2) - escalaSize - markGap - (`${markAtual}`.length * (markFont / 5)), i - (`${markAtual}`.length - (markFont / 2.8)));
  
      ctxPlano.closePath();
    }

    lista.forEach(vetor => {
      PlanoPrint.print(vetor);
    });
  }
}

function drawArrow(ctx, fromx, fromy, tox, toy, arrowWidth, color){
  //variables to be used when creating the arrow
  var headlen = 10;
  var angle = Math.atan2(toy-fromy,tox-fromx);

  ctx.save();
  ctxPlano.setLineDash([]);
  ctx.strokeStyle = color;
  ctx.fillStyle = color;

  //starting path of the arrow from the start square to the end square
  //and drawing the stroke
  ctx.beginPath();
  ctx.moveTo(fromx, fromy);
  ctx.lineTo(tox, toy);
  ctx.lineWidth = arrowWidth;
  ctx.stroke();

  //starting a new path from the head of the arrow to one of the sides of
  //the point
  ctx.beginPath();
  ctx.moveTo(tox, toy);
  ctx.lineTo(tox-headlen*Math.cos(angle-Math.PI/7),
             toy-headlen*Math.sin(angle-Math.PI/7));

  //path from the side point of the arrow, to the other side point
  ctx.lineTo(tox-headlen*Math.cos(angle+Math.PI/7),
             toy-headlen*Math.sin(angle+Math.PI/7));

  //path from the side point back to the tip of the arrow, and then
  //again to the opposite side point
  ctx.lineTo(tox, toy);
  ctx.lineTo(tox-headlen*Math.cos(angle-Math.PI/7),
             toy-headlen*Math.sin(angle-Math.PI/7));

  //draws the paths created above
  ctx.stroke();
  ctx.fill();
  ctx.restore();
}
import { drawArrow, drawRefLine } from "../functions/drawElements.js";
import { Plano } from "../models/Plano.js";
import { Vetor } from "../models/Vetor.js";

// Constantes

const eixosWidth = 3; // espessura dos eixos
const eixosColor = '#000'; // cor dos eixos

const escalaWidth = 1;
const escalaSize = 8;
const escalaColor = '#000'; // cor dos eixos

const markFont = 12; // tamanho da fonte das marcações em px
const markColor = '#000'; // cor da fonte das marcações
const markGap = 15; // espaço entre a mark e a escala

const vetorWidth = 2; // espeçura do vetor

export class PlanoPrint {
  constructor(plano) {
    if(!plano instanceof Plano)
      throw new Error('Modelo inválido em PlanoPrint!');

  this._canvas = plano.canvas;
  this._ctx = this._canvas.getContext('2d');

  this.escala = 35; // escala em px para cada unidade
  }

  updatePlano(model) {
    this._geraEixos();
    model.lista.forEach(vetor => {
      this._print(vetor);
    });
  }

  _print(vetor) {
    if (!vetor instanceof Vetor)
      throw new Error('Tentativa de acidionar um item inválido em ListaVetores!');
    
    let planW = this._canvas.offsetWidth;
    let planH = this._canvas.offsetHeight;

    drawArrow(
      this._ctx,
      planW/2, planH/2,
      planW/2 + (this.escala * vetor.i), planH/2 - (this.escala * vetor.j),
      vetorWidth, vetor.color
    );
    
    drawRefLine(this._ctx, vetor, this.escala, planW, planH);

  }

  _geraEixos() {

    let planW = this._canvas.offsetWidth;
    let planH = this._canvas.offsetHeight;
  
    this._ctx.clearRect(0, 0, this._canvas.width, this._canvas.height);
    this._ctx.beginPath();
    this._ctx.lineWidth = eixosWidth;
    this._ctx.strokeStyle = eixosColor;
    this._ctx.setLineDash([]);
    this._ctx.moveTo(planW/2, 0);
    this._ctx.lineTo(planW/2, planH);
    this._ctx.moveTo(0, planH/2);
    this._ctx.lineTo(planW, planH/2);
    this._ctx.stroke();
    this._ctx.closePath();
  
    for (let i = planW/2; i < planW; i += this.escala) {
  
      // Printando a escala
  
      this._ctx.beginPath();
      this._ctx.lineWidth = escalaWidth;
      this._ctx.strokeStyle = escalaColor;
      this._ctx.setLineDash([]);
      this._ctx.moveTo(i, planH/2);
      this._ctx.lineTo(i, (planH/2) + escalaSize);
      this._ctx.stroke();
  
      this._ctx.font = `${markFont}px serif`;
      this._ctx.strokeStyle = markColor;
  
      let markAtual = Math.floor((i - planW/2) / this.escala);
  
      if (markAtual != 0)
        this._ctx.fillText(`${markAtual}`, i - (`${markAtual}`.length * (markFont / 4)), (planH/2) + escalaSize + markGap);
  
      this._ctx.closePath();
    }
  
    for (let i = planW/2; i > 0; i -= this.escala) {
  
      // Printando a escala
  
      this._ctx.beginPath();
      this._ctx.lineWidth = escalaWidth;
      this._ctx.strokeStyle = escalaColor;
      this._ctx.setLineDash([]);
      this._ctx.moveTo(i, planH/2);
      this._ctx.lineTo(i, (planH/2) + escalaSize);
      this._ctx.stroke();
      this._ctx.closePath();
  
      this._ctx.font = `${markFont}px serif`;
      this._ctx.strokeStyle = markColor;
  
      let markAtual = Math.floor((i - planW/2) / this.escala);
  
      if (markAtual != 0)
        this._ctx.fillText(`${markAtual}`, i - (`${markAtual}`.length * (markFont / 4)), (planH/2) + escalaSize + markGap);
  
      this._ctx.closePath();
    }
  
    for (let i = planH/2; i > 0; i -= this.escala) {
  
      // Printando a escala
  
      this._ctx.beginPath();
      this._ctx.lineWidth = escalaWidth;
      this._ctx.strokeStyle = escalaColor;
      this._ctx.setLineDash([]);
      this._ctx.moveTo(planW/2, i);
      this._ctx.lineTo((planW/2) - escalaSize, i);
      this._ctx.stroke();
  
      this._ctx.font = `${markFont}px serif`;
      this._ctx.strokeStyle = markColor;
  
      let markAtual = Math.floor((i - planH/2) / this.escala) * -1;
  
      if (markAtual != 0)
        this._ctx.fillText(`${markAtual}`, (planW/2) - escalaSize - markGap - (`${markAtual}`.length * (markFont / 5)), i - (`${markAtual}`.length - (markFont / 2.8)));
  
      this._ctx.closePath();
    }
  
    for (let i = planH/2; i < planH; i += this.escala) {
  
      // Printando a escala
  
      this._ctx.beginPath();
      this._ctx.lineWidth = escalaWidth;
      this._ctx.strokeStyle = escalaColor;
      this._ctx.setLineDash([]);
      this._ctx.moveTo(planW/2, i);
      this._ctx.lineTo((planW/2) - escalaSize, i);
      this._ctx.stroke();
  
      this._ctx.font = `${markFont}px serif`;
      this._ctx.strokeStyle = markColor;
  
      let markAtual = Math.floor((i - planH/2) / this.escala) * -1;
  
      if (markAtual != 0)
        this._ctx.fillText(`${markAtual}`, (planW/2) - escalaSize - markGap - (`${markAtual}`.length * (markFont / 5)), i - (`${markAtual}`.length - (markFont / 2.8)));
  
      this._ctx.closePath();
    }
  }
}


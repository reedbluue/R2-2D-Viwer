import { Plano } from "../models/Plano.js";

export class PlanoModify {
  constructor(plano) {
    if(!plano instanceof Plano)
      throw new Error('Modelo inválido em PlanoModify!');

    this._plano = plano;
  }

  ajustaAoDisplay(lista, escalaDistancia) {

    this._plano.container.style.width = `${window.innerWidth * this._plano.width}px`; // atualiza valores do tamanho do container do plano
    this._plano.container.style.height = `${window.innerHeight * this._plano.height}px`; // atualiza valores do tamanho do container do plano

    if (this._plano.container.offsetWidth > this._plano.canvas.offsetWidth) { // se a largura do container for maior
      this._plano.canvas.setAttribute('width', `${this._plano.container.offsetWidth}px`); // modificando a largura do canvas
    }

    if (this._plano.container.offsetHeight > this._plano.canvas.offsetHeight) {  // se a altura do container for maior
      this._plano.canvas.setAttribute('height', `${this._plano.container.offsetHeight}px`); // modificando a altura do canvas
    }

    let maiorIJ = lista.maiorIJ();

    if(this._plano.canvas.offsetWidth < (maiorIJ[0] * escalaDistancia) * 2)
      this._plano.canvas.setAttribute('width', `${(maiorIJ[0] * escalaDistancia) * 2 + (escalaDistancia * 5)}px`);

    if(this._plano.canvas.offsetHeight < (maiorIJ[1] * escalaDistancia) * 2)
      this._plano.canvas.setAttribute('height', `${(maiorIJ[1] * escalaDistancia) * 2 + (escalaDistancia * 5)}px`);

    // Ajusta a posição do canvas caso saia do compo visível da tela
    
    let canvasLeft = this._plano.canvas.offsetLeft;
    let canvasRight = this._plano.canvas.offsetLeft + this._plano.canvas.offsetWidth;

    if (canvasLeft > 0) {
      this._plano.canvas.style.left = `0px`;
    }

    if (canvasRight < this._plano.container.offsetWidth) {
      this._plano.canvas.style.left = `${this._plano.container.offsetWidth - this._plano.canvas.offsetWidth}px`;
    }

    let canvasTop = this._plano.canvas.offsetTop;
    let canvasBottom = this._plano.canvas.offsetTop + this._plano.canvas.offsetHeight;

    if (canvasTop > 0) {
      this._plano.canvas.style.top = `0px`;
    }

    if (canvasBottom < this._plano.container.offsetHeight) {
      this._plano.canvas.style.top = `${this._plano.container.offsetHeight - this._plano.canvas.offsetHeight}px`;
    }
  }
}
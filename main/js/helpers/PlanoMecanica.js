import { Plano } from "../models/Plano.js";

export class PlanoMecanica {
  constructor(plano) {
    if(!plano instanceof Plano)
      throw new Error('Modelo inválido em PlanoMecanica!');

    this._plano = plano;
    this._container = plano.container;
    this._canvas = plano.canvas;
    
    this._centerButton = plano.centerButton;
    this._escalaInButton = plano.escalaInButton;
    this._escalaOutButton = plano.escalaOutButton;

    this._cursorLeftPosition = 0;
    this._cursorTopPosition = 0;

    this._canvas.addEventListener('mousedown', this._arrastaMouseClick); // evento clique do mouse
    this._canvas.addEventListener('touchstart', this._arrastaTouchClick); // evento touch da tela

    this._centerButton.addEventListener('click', this.centralizaPlano); // evento botão centralizar
    this._escalaInButton.addEventListener('click', this._diminuiEscala);
    this._escalaOutButton.addEventListener('click', this._aumentaEscala);
  }

  centralizaPlano = () => {
    this._canvas.style.left = `${(this._container.offsetWidth - this._canvas.offsetWidth) / 2}px`;
    this._canvas.style.top = `${(this._container.offsetHeight - this._canvas.offsetHeight) / 2}px`;
  }

  _aumentaEscala = () => {
    this._plano.escala += 1;
    if(this._plano.escala > 10)
      this._plano.escala = 10;;
  }

  _diminuiEscala = () => {
    this._plano.escala -= 1;
    if(this._plano.escala < 1)
      this._plano.escala = 1;
  }

  _arrastaMouseClick = e => { // ao clicar o mouse
    this._cursorLeftPosition = e.pageX - this._canvas.offsetLeft;  // posição x cursor
    this._cursorTopPosition = e.pageY - this._canvas.offsetTop; // posição y cursor

    addEventListener('mousemove', this._arrastaMouseMove); // evento mover o mouse
    addEventListener('mouseup', this._arrastaMousePara); // evento fim do clique do mouse
  }

  _arrastaMouseMove = e => { // ao mover o mouse
    this._canvas.style.left = `${e.pageX - this._cursorLeftPosition}px`; // atualiza o valor da posição x do plano
    this._canvas.style.top = `${e.pageY - this._cursorTopPosition}px`;  // atualiza o valor da posição y do plano

    let canvasLeft = this._canvas.offsetLeft; // posição x do plano
    let canvasRight = this._canvas.offsetLeft + this._canvas.offsetWidth; // posição y do plano

    // definição de limites

    if (canvasLeft > 0) {
      this._canvas.style.left = `0px`;
      this._cursorLeftPosition = e.pageX - this._canvas.offsetLeft;
    }

    if (canvasRight < this._container.offsetWidth) {
      this._canvas.style.left = `${this._container.offsetWidth - this._canvas.offsetWidth}px`;
      this._cursorLeftPosition = e.pageX - this._canvas.offsetLeft;
    }

     let canvasTop = this._canvas.offsetTop;
     let canvasBottom = this._canvas.offsetTop + this._canvas.offsetHeight;

    if (canvasTop > 0) {
      this._canvas.style.top = `0px`;
      this._cursorTopPosition = e.pageY - this._canvas.offsetTop;
    }

    if (canvasBottom < this._container.offsetHeight) {
      this._canvas.style.top = `${this._container.offsetHeight - this._canvas.offsetHeight}px`;
      this._cursorTopPosition = e.pageY - this._canvas.offsetTop;
    }
  
  }

  _arrastaMousePara = () => {
    removeEventListener('mousemove', this._arrastaMouseMove); // remove o evento mover o mouse
    removeEventListener('mouseup', this._arrastaMousePara); // remove o evento fim do clique do mouse
  }

  _arrastaTouchClick = e => { // ao tocar na tela
    this._cursorLeftPosition = e.touches[0].pageX - this._canvas.offsetLeft; // atualiza o valor da posição x do plano
    this._cursorTopPosition = e.touches[0].pageY - this._canvas.offsetTop; // atualiza o valor da posição y do plano

    addEventListener('touchmove', this._arrastaTouchMove); // evento move touch na tela
    addEventListener('touchstop', this._arrastaTouchStop); // evento fim do touch na tela
  }

  _arrastaTouchMove = e => { // ao mover o touch na tela
    this._canvas.style.left = `${e.touches[0].pageX - this._cursorLeftPosition}px`;  // atualiza o valor da posição x do plano
    this._canvas.style.top = `${e.touches[0].pageY - this._cursorTopPosition}px`;  // atualiza o valor da posição y do plano

    let canvasLeft = this._canvas.offsetLeft; // posição x do plano
    let canvasRight = this._canvas.offsetLeft + this._canvas.offsetWidth;  // posição y do plano

    if (canvasLeft > 0) {
      this._canvas.style.left = `0px`;
      this._cursorLeftPosition = e.touches[0].pageX - this._canvas.offsetLeft;
    }

    if (canvasRight < this._container.offsetWidth) {
      this._canvas.style.left = `${this._container.offsetWidth - this._canvas.offsetWidth}px`;
      this._cursorLeftPosition = e.touches[0].pageX - this._canvas.offsetLeft;
    }

    let canvasTop = this._canvas.offsetTop;
    let canvasBottom = this._canvas.offsetTop + this._canvas.offsetHeight;

    if (canvasTop > 0) {
      this._canvas.style.top = `0px`;
      this._cursorTopPosition = e.touches[0].pageY - this._canvas.offsetTop;
    }

    if (canvasBottom < this._container.offsetHeight) {
      this._canvas.style.top = `${this._container.offsetHeight - this._canvas.offsetHeight}px`;
      this._cursorTopPosition = e.touches[0].pageY - this._canvas.offsetTop;
    }
  }

  _arrastaTouchStop() {
    removeEventListener('touchmove', this._arrastaTouchMove);  // remove o evento mover o touch
    removeEventListener('touchstop', this._arrastaTouchStop);  // remove o evento fim do touch
  }
}
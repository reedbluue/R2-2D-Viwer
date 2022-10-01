export class Plano {

  constructor(idRef, manualSize=false, w=250, h=250) {
    this._container = document.querySelector(idRef);
    this._canvas = document.querySelector(`${idRef} canvas`);
    this._centerButton = document.querySelector(`${idRef} .center-button`);
    this._escalaInButton = document.querySelector(`${idRef} .escalain-button`);
    this._escalaOutButton = document.querySelector(`${idRef} .escalaout-button`);
    this.exitButton = document.querySelector(`${idRef} .exit-plan`);

    this.idRef = idRef;

    this.escala = 1;

    this.width = 1;
    this.height = 0.75;

    this.manualSize = manualSize;

    this.mWidth = w;
    this.mHeight = h;
  }

  update() {
    this._container = document.querySelector(this.idRef);
    this._canvas = document.querySelector(`${this.idRef} canvas`);
    this._centerButton = document.querySelector(`${this.idRef} .center-button`);
    this._escalaInButton = document.querySelector(`${this.idRef} .escalain-button`);
    this._escalaOutButton = document.querySelector(`${this.idRef} .escalaout-button`);
    this.exitButton = document.querySelector(`${this.idRef} .exit-plan`);
  }

  get container() { return this._container; }
  get canvas() { return this._canvas; }
  get escala() { return this._escala; }
  set escala(escala) { return this._escala = escala; }

  get centerButton() { return this._centerButton; }
  get escalaInButton() { return this._escalaInButton; }
  get escalaOutButton() { return this._escalaOutButton; }

}
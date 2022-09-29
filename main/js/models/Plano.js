export class Plano {

  constructor(idRef) {
    this._container = document.querySelector(idRef);
    this._canvas = document.querySelector(`${idRef} canvas`);
    this._centerButton = document.querySelector(`${idRef} .center-button`);
    this._escalaInButton = document.querySelector(`${idRef} .escalain-button`);
    this._escalaOutButton = document.querySelector(`${idRef} .escalaout-button`);

    this.escala = 1;

    this.width = 1;
    this.height = 0.85;
  }

  get container() { return this._container; }
  get canvas() { return this._canvas; }
  get escala() { return this._escala; }
  set escala(escala) { return this._escala = escala; }

  get centerButton() { return this._centerButton; }
  get escalaInButton() { return this._escalaInButton; }
  get escalaOutButton() { return this._escalaOutButton; }

}
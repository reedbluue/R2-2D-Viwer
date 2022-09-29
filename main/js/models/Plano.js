export class Plano {

  constructor(idRef) {
    this._container = document.querySelector(idRef);
    this._canvas = document.querySelector(`${idRef} canvas`);

    this.width = 1;
    this.height = 0.85;
  }

  get container() { return this._container; }
  get canvas() { return this._canvas; }

}
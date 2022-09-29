export class View {

  constructor(elemento) {
    this._elemento =  elemento;
  }

  template(model) {
    throw new Error('O template da view precisa ser definida!');
  }

  update(model) {
    this._elemento.innerHTML = this.template(model);
  }

}
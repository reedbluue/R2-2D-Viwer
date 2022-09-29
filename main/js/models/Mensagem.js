export class Mensagem {
  constructor(content = '', type = 0) {
    this._content = content;
    this._type = 0;
  }

  get content() { return this._content; }
  get type() { return this._type; }

  set content(content) { return this._content = content; }
  set type(type) { return this._type = type; }

  modify(content, type) {
    this._content = content;
    this._type = type;
  }
}
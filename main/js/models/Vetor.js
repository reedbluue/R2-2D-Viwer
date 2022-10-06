import { validaEntrada } from "../functions/vetorChecks.js";

export class Vetor {
  constructor(id, color = '000', i = 0, j = 0) {
    this.id = id.toUpperCase();
    this.i = Number(validaEntrada(i).toFixed(2));
    this.j = Number(validaEntrada(j).toFixed(2));

    this.color = color;
  }

  norma() { return Math.sqrt(Math.pow(this.i, 2) + Math.pow(this.j, 2)).toFixed(2); }

  versor() { return new Vetor(`v-${this.id}`, this.color, (this.i / this.norma()).toFixed(2), (this.j / this.norma()).toFixed(2)); }

  inverte() {
    this.i *= -1;
    this.j *= -1;
  }
}
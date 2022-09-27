export class Vetor {
  constructor(id, color = '000', i = 0, j = 0) {
    this.id = id;
    this.i = i;
    this.j = j;

    this.color = color;
  }

  norma() { return Math.sqrt(Math.pow(this.i, 2) + Math.pow(this.j, 2)); }
}
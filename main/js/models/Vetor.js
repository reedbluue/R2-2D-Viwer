export class Vetor {
  constructor(id, color = '000', i = 0, j = 0) {
    this.id = id.toUpperCase();
    this.i = i;
    this.j = j;

    this.color = color;
  }

  norma() { return Math.sqrt(Math.pow(this.i, 2) + Math.pow(this.j, 2)); }

  tipo() {
    let tipos = [];
    if(this.norma() == 1) {
      tipos.push('UNITÁRIO');
    } else if (this.i == this.j && this.i == 0) {
      tipos.push('NULO');
    } else {
      tipos = ['NÃO ESPECIAL']
    }
    return tipos.join(' - ')
  }
}
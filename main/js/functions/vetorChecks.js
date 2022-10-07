const raizPattern = /([+-])?raiz\((.*)\)/i;

const numberPattern = /^[+-]?([0-9]\d*(\.|\,)\d*|0?(\.|\,)\d*[0-9]\d*|[0-9]\d*)$/;

export function validaEntrada(entrada) {
  if(!entrada)
    throw new Error(`Valor da entrada não pode ser nula!`);
  let raiz = raizPattern.exec(entrada);
  if(raiz) {
    let number = numberPattern.exec(raiz[2]);
    if(number && number[0] >= 0 && number[0] <= 10000 && number[0] >= -10000) {
      if(!raiz[1] || raiz[1] == '+') {
        return Math.sqrt(number[0]);
      } else {
        return Math.sqrt(number[0]) * -1;
      }
    }
    throw new Error(`Valor da entrada "${entrada}" inválida!`);
  } else {
    let number = numberPattern.exec(entrada);
    if(number && number[0] <= 100 && number[0] >= -100)
      return Number(number[0]);
    throw new Error(`Valor da entrada "${entrada}" inválida!`);
  }
}

export function validaTipo(vetor) {
  let tipos = [];
  if(vetor.norma() == 1) {
    tipos.push('UNITÁRIO');
  } else if (vetor.i == vetor.j && vetor.i == 0) {
    tipos.push('NULO');
  } else {
    tipos = ['NÃO ESPECIAL']
  }
  return tipos.join(' - ')
}
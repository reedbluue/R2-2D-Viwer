import { View } from "./View.js";

export class ListaVetoresView extends View{

  constructor(elemento) {
    super(elemento)
  }

  template(model) {
    return `
      <table>
        <thead>
          <th>ID</th>
          <th>COR</th>
          <th>COORDENADAS ( i , j )</th>
          <th>NORMA</th>
          <th>TIPO</th>
          <th>DEL?</th>
        </thead>
        <tbody>
          ${model.lista.map(vetor => {
            return `
              <tr>
                <td>${vetor.id}</td>
                <td style="background-color:${vetor.color}"></td>
                <td class="js" js--destacar-vetor>( ${vetor.i} , ${vetor.j} )</td>
                <td>${vetor.norma()}</td>
                <td>${vetor.tipo()}</td>
                <td class="js table--del-cell" js--deletar-vetor>X</td>
              </tr>
            `;
          }).join('')}
        </tbody>
      </table>   
    `;
  }

}
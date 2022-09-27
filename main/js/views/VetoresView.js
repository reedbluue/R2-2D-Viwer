export class VertoresView {

  constructor(elemento) {
    this._elemento =  elemento;
  }

  template(model) {
    return `
      <table>
        <thead>
          <th>ID</th>
          <th>Cor</th>
          <th>Coordenada i</th>
          <th>Coordenada j</th>
          <th>Norma</th>
        </thead>
        <tbody>
          ${model.lista.map(vetor => {
            return `
              <tr>
                <td>${vetor.id}</td>
                <td style="background-color:${vetor.color}"></td>
                <td>${vetor.i}</td>
                <td>${vetor.j}</td>
                <td>${vetor.norma()}</td>
              </tr>
            `;
          }).join('')}
        </tbody>
      </table>   
    `;
  }

  update(model) {
    this._elemento.innerHTML = this.template(model);
  }

}
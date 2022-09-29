import { View } from "./View.js";

export class MensagemView extends View {
  constructor(element) {
    super(element);
  }

  template(model) {
    if(!model.content)
      return `<p></p>`;

    if(model.type == 1) {
      return `<p class="alerta alerta--erro">${model.content}</p>`;
    } else {
      return `<p class="alerta">${model.content}</p>`;
    }
  }
}
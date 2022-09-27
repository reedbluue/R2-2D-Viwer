import { ProxyFactory } from "../services/ProxyFactory.js";
import { PlanoPrint } from "./PlanoPrint.js";

export class Bind {
  constructor(model, view, ...props) {
    let proxy = ProxyFactory.create(model, props, model => {
      view.update(model);
      PlanoPrint.geraPlano(model.lista);
    });
    view.update(model);
    return proxy;
  }
}
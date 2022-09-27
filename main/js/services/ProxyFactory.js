export class ProxyFactory {

  constructor() {
    throw new Error('A classe ProxyFactory não deve ser instanciada!');
  }

  static create(obj, props, acao) {
    return new Proxy(obj, {

      get(target, prop, receiver) {
        if (props.includes(prop) && typeof target[prop] == typeof Function) {
          return function() {
            Reflect.apply(target[prop], receiver, arguments);
            return acao(target);
          }
        }
        return Reflect.get(...arguments);
      },
      set(target, prop, value, receiver) {
        if(props.include(prop)){
          acao(target);
          Reflect.set(...arguments);
        }
        return Reflect.set(...arguments);
      }

    });
  }
}

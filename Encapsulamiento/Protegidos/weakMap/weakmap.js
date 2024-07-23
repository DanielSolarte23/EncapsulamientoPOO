let weak = new WeakMap();
let obj = {}

weak.set(obj, "Valor 1 de weak")
console.log(weak.get(obj));


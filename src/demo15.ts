// infer 关键字
(() => {
  type A<T> = T extends Array<infer U> ? U : T;
  type B = A<number>;
  type C = A<string>;
  var a: B = 1;
  var b: C = '1';
  console.log(a, b);
})();

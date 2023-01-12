interface IUserInfo {
  name: string,
  age: number,
  address: string,
}
// Record的内部定义，接收两个泛型参数；Record后面的泛型就是对象键和值的类型
// Record<string, never> 空对象
// Record<string, unknown> 任意对象
// {} 任何不为空的对象
type obj = Record<string, unknown>;
// 作用：Partial生成一个新类型，该类型与 T 拥有相同的属性，但是所有属性皆为可选项
type man = Partial<IUserInfo>;
const map: obj = { a: 1 };
const person: man = {
  name: 'jack'
}
console.log(map);
console.log(person);
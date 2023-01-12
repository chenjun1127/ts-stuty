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
const map: obj = { a: 1 };
console.log(map);

// 作用：Partial生成一个新类型，该类型与 T 拥有相同的属性，但是所有属性皆为可选项
type infoType1 = Partial<IUserInfo>;
const person1: infoType1 = {
  name: 'Jack'
}
console.log(person1);

// 作用：生成一个新类型，该类型与 T 拥有相同的属性，但是所有属性皆为必选项
type infoType2 = Required<IUserInfo>;
const person2: infoType2 = {
  name: 'Lucy',
  age: 20,
  address: 'China BeiJing'
}
console.log(person2);

// 作用：生成一个新类型，T 中的 K 属性是只读的，K 属性是不可修改的。
type infoType3 = Readonly<IUserInfo>;
const person3: infoType3 = {
  name: 'Tony',
  age: 33,
  address: 'China GuangZhou'
}
// person3.age=25; 只读属性，不可赋值
console.log(person3);

// 作用：生成一个新类型，该类型拥有 T 中的 K 属性集 ; 新类型 相当于 T 与 K 的交集
type infoType4 = Pick<IUserInfo, 'name' | 'age'>;
const person4: infoType4 = {
  name: "James",
  age: 20
}
console.log(person4);

// 更多用法参考：https://www.typescriptlang.org/docs/handbook/utility-types.html#awaitedtype

 





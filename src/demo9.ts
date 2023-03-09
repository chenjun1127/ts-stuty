type StringMap<T> = {
  [p in keyof T]: string;
};
// 映射类型允许你从一个旧的类型，生成一个新的类型。
function showType(arg: StringMap<{ id: number; name: string }>) {
  console.log(arg);
}
showType({ id: '001', name: 'test' });
interface IInfo {
  id: number;
  name: string;
}
type typeInfo1 = StringMap<IInfo>;
const info1: typeInfo1 = {
  id: '002',
  name: 'jack'
};
console.log(info1);